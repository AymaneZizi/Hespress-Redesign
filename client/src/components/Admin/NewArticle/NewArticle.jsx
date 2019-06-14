import React, { Component } from 'react'
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';
import axios from 'axios'

import ArticleInfo from '../ArticleInformations/ArticleInformations'
import StylePanel from "../StylePanel/StylePanel"

import './NewArticle.css'
import 'draft-js/dist/Draft.css';
export class NewArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            id: '',
            title: '',
            author: '',
            img: '',
            category: [],
            date: Date.now(),
            country: '',
            body: '',
            draft: true,
            message: '',
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        if (!id) return
        axios.get('/api/articles/edit/' + id)
            .then(res => {

                const { title, body, img, date, country, draft, category } = res.data;

                const contentState = convertFromRaw(JSON.parse(body))
                const editorState = contentState && EditorState.createWithContent(contentState);
                this.setState({
                    id,
                    category,
                    title,
                    editorState,
                    img,
                    date,
                    country,
                    draft
                })
            })
            .catch(err => alert(err));
    }

    //Handle Draft.js Editor State change

    onChangeEditor = (editorState) => {
        this.setState({
            editorState,
        });
    }

    // Handle Keyboard shortcuts to style text in Draft.js Editor
    handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    //Handle Input change and update the state

    onChange = (e) => {
        e.persist();

        this.setState(prevState => ({
            [e.target.name]: e.target.value
        }))
    }


    onChangeMultipe = (name, data) => {
        console.log(data)
        this.setState({ [name]: data })
    }

    //hanldle style buttons click to style Draft.js text in the editor
    HandleStyleButtonClick = (e) => this.onChangeEditor(RichUtils.toggleInlineStyle(this.state.editorState, e.target.id));

    //Handle choosing an image by the usr, 

    handleChangeImage = async (e) => {
        e.persist()
        this.handleRemoveImage();

        const img = e.target.files[0]
        if (!img) return
        const formData = new FormData();

        formData.append('img', img);

        axios.post('/api/images', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
            .then(res => {
                console.log(res.data.img)
                this.setState({
                    img: res.data.img
                })
            })
            .catch(err => this.message("فشل في الاتصال"))
    }

    handleRemoveImage = async () => {
        let { img } = this.state;
        if (!img) return

        axios.delete('/api/images', { data: { img: this.state.img } })
            .then(res => {
                this.setState({
                    img: ''
                })
            })
            .catch(err => this.message("فشل في الاتصال"))
    }

    message = (msg) => {
        this.setState({ message: msg })
        setTimeout(() => {
            this.setState({ message: '' })
        }, 1000)
    }


    //Handle Save 

    handleSave = async () => {
        const body = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()));
        const { title, img, date, country, draft, id, category } = this.state;
        const data = { title, img, date, body, country, draft, id, category }
        axios.post('/api/articles/', data)
            .then(res => {
                this.setState({
                    id: res.data._id,
                })
                this.message('تم حفظ المقال')
                return res;
            })
            .catch(err => {
                this.message("لم يتم حفظ المقال");
            })
    }

    handlePublish = () => {
        this.setState({ draft: false }, () => this.handleSave());
    }

    handleDraft = () => {
        this.setState({ draft: true }, () => this.handleSave());
    }


    render() {
        const { title, img, country, date, category, editorState, draft, message } = this.state;
        const info = { img, country, date, category };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <input className='article-title' type='text' placeholder='عنوان المقال' name="title" value={title} onChange={this.onChange} />

                        <StylePanel onClick={this.HandleStyleButtonClick} />

                        <div className='article-text'>
                            <Editor editorState={editorState} handleKeyCommand={this.handleKeyCommand} placeholder="نص المقال..." onChange={this.onChangeEditor} />
                        </div>

                    </div>

                    <div className="col-lg-3">

                        <ArticleInfo
                            handleChangeImage={this.handleChangeImage}
                            handleRemoveImage={this.handleRemoveImage}
                            onChange={this.onChange}
                            onChangeMultipe={this.onChangeMultipe}
                            {...info}
                        />

                        <div className="panel">

                            <div className="submit">
                                {draft ?
                                    <button onClick={this.handlePublish} className="save btn-round btn-main">نشر</button> :
                                    <button onClick={this.handleDraft} className="save btn-round btn-main">مسودة</button>
                                }
                                <button onClick={this.handleSave} className="save btn-round">حفظ</button>
                            </div>

                            <div className="message">
                                <div>{draft ? "المقال في وضع مسودة" : "تم نشر المقال"}</div>
                                <div>{message}</div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}



export default NewArticle

import React, { Component } from 'react'
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import axios from 'axios'
import 'draft-js/dist/Draft.css';

import './NewArticle.css'
import Sep from 'components/Sep'
import StylePanel from "../StylePanel/StylePanel"

export class NewArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            id: '',
            title: '',
            body: '',
            author: '',
            imgName: '',
            imgData: '',
            img: '',
            category: '',
            date: Date.now(),
            country: ''
        };
    }

    //Create Article and Get the ID
    componentDidMount = () => {
        axios.post('/api/articles')
            .then(res => {
                console.log("id:", res.data._id)
                this.setState({ id: res.data._id })
            })
    }
    //Handle Draft.js Editor State change

    onChangeEditor = (editorState) => {
        this.setState({ editorState, body: JSON.stringify(convertToRaw(editorState.getCurrentContent())) });
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
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //hanldle style buttons click to style Draft.js text in the editor
    HandleStyleButtonClick = (e) => this.onChangeEditor(RichUtils.toggleInlineStyle(this.state.editorState, e.target.id));

    //Handle choosing an image by the usr, 

    handleChangeImage = (e) => {
        const img = e.target.files[0]

        if (img) this.setState({ img: img, imgUrl: URL.createObjectURL(img) })
    }

    removeImage = () => {
        this.setState({ img: null, imgUrl: null })
    }


    //Handle Save 

    handleSave = async () => {
        const formData = new FormData();
        formData.append("id", this.state.id)
        formData.append("title", this.state.title);
        formData.append("body", this.state.body);
        formData.append("date", this.state.date);
        formData.append("country", this.state.country);
        formData.append("imgName", this.state.imgName);
        formData.append('img', this.state.img);

        try {
            const res = await axios.put('/api/articles', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
            console.log(res.data)
        } catch (err) {
            console.log(err);
        }
    }


    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <input className='article-title' type='text' placeholder='عنوان المقال' name="title" onChange={this.onChange} />

                        <StylePanel onClick={this.HandleStyleButtonClick} />

                        <div className='article-text'>
                            <Editor editorState={this.state.editorState} handleKeyCommand={this.handleKeyCommand} placeholder="نص المقال..." onChange={this.onChangeEditor} />
                        </div>

                    </div>

                    <div className="col-lg-3">
                        <div className='article-informations'>
                            <h3>معلومات المقال</h3>

                            <Sep color='grey' />

                            <div className="input img-input">
                                <input type='file' value={this.state.img && ""} id="file" onChange={this.handleChangeImage} accept="image/*"></input>
                                <div>
                                    <label htmlFor="file">اختر صورة </label>
                                    {(this.state.img) && <button onClick={this.removeImage}><span class="mbri-trash"></span></button>}
                                </div>
                                <img src={this.state.imgUrl} alt="" />
                            </div>
                            <div className='input'>
                                <select name='country' onChange={this.onChange}>
                                    <option value>البلد</option>
                                    <option>المغرب</option>
                                    <option>فرنسا</option>
                                    <option>الجزائر</option>
                                </select>

                                <span className="mbri-arrow-down"></span>
                            </div>

                            <div className="input">
                                <input style={{ paddingLeft: 30 }} type="date" name="date" onChange={this.onChange} placeholder='تاريخ النشر' />
                                <span className="mbri-calendar"></span>
                            </div>

                            <div>
                                <h5>شخصيات دات علاقة</h5>

                                <div className='input'><input type='text' name="date" onChange={this.onChange} placeholder="أضف شخصية جديدة" /><span className="mbri-plus" /></div>
                            </div>

                            <div className="input-group">
                                <h5>احداث دات علاقة</h5>
                                <div className='input'><input type='text' placeholder="أضف حدثا جديدا" /><span className="mbri-plus" /></div>
                            </div>

                            <div className="input-group">
                                <h5>اخبار دات علاقة</h5>
                                <div className='input'><input type='text' onChange={this.onChange} placeholder="أضف خبرا جديدا" /><span className="mbri-plus" /></div>
                            </div>

                            <div className="input-group submit">
                                <button onClick={this.handlePublish} className="save btn-round btn-main">نشر</button>
                                <button onClick={this.handleSave} className="save btn-round">حفظ</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewArticle

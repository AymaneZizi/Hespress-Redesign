import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

import Sep from '../../FullWidthSep'
import './Articles.css'
import Confirm from '../../Confirm/Confirm'

export class Articles extends Component {
    state = {
        articles: [],
        message: ''
    }
    componentDidMount() {
        axios.get('/api/articles')
            .then(res => {
                this.setState(prevState => ({
                    articles: [...prevState.articles, ...res.data]
                }))
            })
            .catch(err => console.log(err))
    }

    deleteArticle = (id) => {
        axios.delete('/api/articles/' + id)
            .then(res => {
                this.setState(prevState => ({
                    articles: prevState.articles.filter(article => article._id !== id)
                }))
            })
    }

    render() {
        return (
            <div className='Articles'>
                <div className="head">
                    <h3> المقالات المنشورة</h3>
                    <Link to={`${this.props.path}/NewArticle/`} className="btn-round btn-main add-article">مقال جديد</Link>
                </div>

                <Sep color='grey' />

                <table className="ArticleTable">
                    <thead>
                        <tr>
                            <td className="table-article-title">العنوان</td>
                            <td>تاريخ</td>
                            <td>المشاهدات</td>
                            <td>التعليقات</td>
                            <td className="buttons"></td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.articles.map(article => (
                                <TdArticle key={article._id} {...article} deleteArticle={this.deleteArticle}></TdArticle>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Articles

function TdArticle(props) {
    const [isHovering, setHovering] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const { _id, title, views, date } = props;

    const handleShowConfirm = () => {
        setShowConfirm(true);
    }

    const handleHideConfirm = () => {
        setShowConfirm(false);
        setHovering(false);
    }

    return (
        <tr onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
            <td><Link to={`/articles/${_id}`}> {title}</Link></td>
            <td>{moment(date).format('DD/MM/YYYY')}</td>
            <td>{views}</td>
            <td>2300</td>
            <td className="buttons">
                {isHovering &&
                    <>
                        <Link to={`admin/NewArticle/${_id}`} ><i className="la la-pencil"></i></Link>
                        <button onClick={handleShowConfirm}><i className="la la-trash"></i></button>
                    </>
                }
            </td>

            {
                showConfirm &&
                <Confirm
                    title='تأكيد حذف المقال'
                    message='هل انت متأكد من رغبتك بحذف المقال ؟'
                    hide={handleHideConfirm}
                    onConfirm={props.deleteArticle.bind(this, _id)}
                />
            }


        </tr>
    )
}

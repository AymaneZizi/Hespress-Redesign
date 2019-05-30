import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

import Sep from '../../FullWidthSep'
import './Articles.css'

export class Articles extends Component {
    state = {
        articles: []
    }
    componentDidMount() {
        axios.get('/api/articles')
            .then(res => {
                console.log(res.data)
                this.setState(prevState => ({
                    articles: [...prevState.articles, ...res.data]
                }))
            })
            .catch(err => console.log(err))
    }
    render() {
        return (

            <div className="Articles">
                <div className="head">
                    <h3> المقالات المنشورة</h3>
                    <Link to={`${this.props.path}/NewArticle/`} className="btn-round btn-main add-article">مقال جديد</Link>
                </div>

                <Sep color='grey' />

                <table className="ArticleTable">
                    <thead>
                        <tr>
                            <td>العنوان</td>
                            <td>تاريخ</td>
                            <td>المشاهدات</td>
                            <td>التعليقات</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.articles.map(article => (
                                <tr key={article._id}>
                                    <td><Link to={`${this.props.path}/NewArticle/${article._id}`}> {article.title}</Link></td>
                                    <td>{moment(article.date).format('DD/MM/YYYY')}</td>
                                    <td>{article.views}</td>
                                    <td>2300</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Articles

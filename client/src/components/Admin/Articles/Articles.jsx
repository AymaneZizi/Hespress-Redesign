import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Sep from '../../FullWidthSep'
import './Articles.css'

export class Articles extends Component {
    render() {
        return (
            <div className="Articles">
                <div className="head">
                    <h3> المقالات المنشورة</h3>
                    <Link to='/admin/NewArticle/' className="btn-round btn-main add-article">مقال جديد</Link>
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
                        <tr>
                            <td>رفعت تركيا، اليوم الأربعاء، حالة الطوارئ المعلنة في البلاد بعد الانقلاب العسكري</td>
                            <td>12/12/2019</td>
                            <td>1234</td>
                            <td>2300</td>
                        </tr>

                        <tr>
                            <td>رفعت تركيا، اليوم الأربعاء، حالة الطوارئ المعلنة في البلاد بعد الانقلاب العسكري</td>
                            <td>12/12/2019</td>
                            <td>1234</td>
                            <td>2300</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Articles

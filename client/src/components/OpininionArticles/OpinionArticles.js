import React, { Component } from "react";
import './OpinionArticles.css';
import { articles } from '../fakeArticles';
import OpinionArticle from './OpinionArticle/OpinionArticle'

export default class OpinionArticles extends Component {
    render() {
        return (
            <div className="OpinionArticles">
                <div className="head row">
                    <div className='col-lg-5 sep' />
                    <h3 className='col-lg-2'>كتاب الرأي</h3>
                    <div className='col-lg-5 sep' />
                </div>

                <div className="row">
                    {articles.slice(0, 3).map(article => (
                        <OpinionArticle key={article.id} article={article} className="col-lg-4 col-md-12" />
                    ))}
                </div>
            </div>
        )
    }
}
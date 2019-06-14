import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Comments.css';
import Sep from '../FullWidthSep'
import Comment from './Comment'
import AddComment from './AddComment'

export default function Comments(props) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        if (!props.article) return
        axios.get(`/api/articles/${props.article}/comments`)
            .then(res => setComments(res.data))
    }, [props])


    const addArticle = (comment) => {
        console.log(comment)
        setComments([comment, ...comments])
    }

    return (
        <div className="Comments">
            <div className="head">
                <h3>التعليقات</h3>
                <span>التعليقات تعبر فقط عن رأي اصحابها</span>
            </div>
            <Sep color='gray' />
            <AddComment article={props.article} addArticle={addArticle} />


            {comments.map(comment => <Comment key={comment._id} {...comment} />)}
        </div>
    )
}
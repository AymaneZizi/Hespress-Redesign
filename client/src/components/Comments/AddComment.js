import React, { useState } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import Textarea from 'react-textarea-autosize';
import { token } from 'actions/authActions'


import './AddComment.css'

function AddComment(props) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!props.article) return

        if (!text) return

        const config = props.token();

        axios.post('/api/comments', { text, article: props.article }, config)
            .then(res => props.addArticle(res.data))
            .catch(err => console.log(err))
    }
    return (
        <div className='AddComment'>
            <div className='commentIcon'>
                <i className="la la-keyboard-o"></i>
            </div>

            <form onSubmit={handleSubmit} className="commentInput">
                <div className='textarea'>
                    {props.isAuthenticated ?
                        <Textarea onChange={(e) => setText(e.target.value)} value={text} placeholder="شارك بالنقاش، اضف تعليقا" />
                        :
                        "قم بتسجيل الدخول لاضافة تعليق"
                    }

                </div>
                {props.isAuthenticated &&
                    <>
                        <button type='submit' className="btn-round btn-main" >نشر</button>
                        <button className="btn-round">حفظ كمسودة</button>
                    </>
                }
            </form>

        </div>
    )
}



const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token
})

export default connect(mapStateToProps, { token })(AddComment)

import React from 'react';
import './Comments.css';
import Sep from '../FullWidthSep'
import Textarea from 'react-textarea-autosize';
import Comment from './Comment'

export default function Comments(props) {
    const ButtonStyle = {
        margin: '10px 0 0 5px'
    }
    return (
        <div className="Comments">
            <div className="head">
                <h3>التعليقات</h3>
                <span>التعليقات تعبر فقط عن رأي اصحابها</span>
            </div>
            <Sep color='gray' />
            <div className='AddComment'>
                <div className='commentIcon'>
                    <i class="la la-keyboard-o"></i>
                </div>

                <div className="commentInput">
                    <div className='textarea'>
                        <Textarea placeholder="شارك بالنقاش، اضف تعليقا" />
                    </div>
                    <button style={ButtonStyle} className="btn-round btn-main" >نشر</button>
                    <button style={ButtonStyle} className="btn-round">حفظ كمسودة</button>
                </div>

            </div>

            <Comment />
            <Comment />
            <Comment />
        </div>
    )
}
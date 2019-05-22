import React, { Component } from 'react';
import './Comment.css';

export default class Comment extends Component {
    constructor() {
        super();
        this.state = {
            rate: 0
        }
    }
    render() {
        return (
            <div className="comment">
                <div className="rating">
                    <button href='#vote-up'><img src="/Assets/images/SVG/vote-up.svg" alt='vote-up' /></button>
                    <div id="rate">{this.state.rate}</div>
                    <button href='#vote-down'><img src="/Assets/images/SVG/vote-down.svg" alt='vote-up' /></button>
                    <div className="lline"></div>
                </div>
                <div className="replays">
                    <div className="text">
                        <p>
                            ومن المقرر أن يناقش البرلمان التركي، غدا الخميس، مشروع قانون جديد لمكافحة الإرهاب، وهو ينص، من بين أمور أخرى، على منح الوزراء سلطة فصل الموظفين المشتبه في وجود صلات لهم بالإرهاب
                        </p>
                        <div className="commentInfo">
                            <a href="#author">
                                <span className="mbri-user"></span>
                                <span>زكرياء الأزرق</span>
                            </a>

                            <a href="#time">
                                <span className="mbri-clock"></span>
                                <span>قبل 4 ساعات</span>
                            </a>

                            <a href="#time">
                                <span className="mbri-chat"></span>
                                <span>رد على التعليق</span>
                            </a>
                        </div>
                    </div>

                    {this.props.children}
                </div>
            </div >
        )
    }
}
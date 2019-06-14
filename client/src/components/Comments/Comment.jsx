import React, { Component } from 'react';
import moment from 'moment'
import './Comment.css';

export default class Comment extends Component {
    constructor() {
        super();
        this.state = {
            rate: 0
        }
    }
    render() {
        const { text, user, date } = this.props;
        return (
            <div className="comment">
                <div className="rating">
                    <button href='#vote-up'><img src="/Assets/images/SVG/vote-up.svg" alt='vote-up' /></button>
                    <div id="rate">{this.state.rate}</div>
                    <button href='#vote-down'><img src="/Assets/images/SVG/vote-down.svg" alt='vote-up' /></button>
                    <div className="lline"></div>
                </div>
                <div className="text">
                    <p>
                        {text}
                    </p>
                    <div className="commentInfo">
                        <a href="#author">
                            <span className="mbri-user"></span>
                            <span>{user.name}</span>
                        </a>

                        <a href="#time">
                            <span className="mbri-clock"></span>
                            <span>{moment(date).fromNow()}</span>
                        </a>

                        <a href="#time">
                            <span className="la la-keyboard-o"></span>
                            <span>رد على التعليق</span>
                        </a>
                    </div>
                </div>

            </div >
        )
    }
}
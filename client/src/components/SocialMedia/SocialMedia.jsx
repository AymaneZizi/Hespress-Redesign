import React, { Component } from 'react'
import './SocialMedia.css'
import Facebook from './Facebook';
import Instagram from './Instagram';
import Youtube from './Youtube';
import Sep from '../Sep';

export default class SocialMedia extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="SocialMedia">
                    <h3>تابعنا على مواقع التواصل الاجتماعي</h3>
                    <Sep color="grey" />
                    <Facebook link="www.facebook.com" />
                    <Instagram link="www.instagram.com" />
                    <Youtube link="www.youtube.com" />
                </div>
            </div>
        )
    }
}
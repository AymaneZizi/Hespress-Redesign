import React, { Component } from 'react'
import classNames from 'classnames'

import './PopUp.css'

export default class PopUp extends Component {

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClickOutside, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside, false);
    }

    handleClickOutside = (e) => {
        if (this.node.contains(e.target)) return;
        this.props.hide()
    }


    render() {
        return (
            <div className="outer">
                <div ref={node => this.node = node} className={classNames('popup', this.props.className)}>
                    {this.props.children}
                </div>
            </div >
        )
    }
}

import React, { Component } from 'react'

export default class FloatBox extends Component {
    componentWillMount() {
        document.addEventListener('mousedown', this.handleClickOutside, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside, false);
    }

    handleClickOutside = (e) => {
        if (this.node.contains(e.target)) {
            return;
        }
        this.props.hide();
    }
    render() {
        return (
            <div ref={node => this.node = node} >
                {this.props.children}
            </div>
        )
    }
}

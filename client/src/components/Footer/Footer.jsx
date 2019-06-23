import React, { Component } from 'react';
import './Footer.css';
export default class Footer extends Component {
    render() {
        return (
            <footer>
                <img className="col-lg-3 logo" src='/Assets/images/SVG/logo.svg' alt='logo' />
                <p>Designed and coded with love by <a href='www.elazrak.me'>Zakaria Elazrak</a></p>
            </footer>
        )
    }
}
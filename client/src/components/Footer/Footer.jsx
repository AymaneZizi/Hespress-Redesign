import React, { Component } from 'react';
import './Footer.css';
export default class Footer extends Component {
    render() {
        return (
            <footer className="row">
                <img className="col-lg-3 logo" src='/Assets/images/SVG/logo.svg' alt='logo' />
                <p>Fully Redesigned and coded with love by <a href='www.elazrak.me'>Zakaria Elazrak</a></p>
                <p>اعادة تصميم و برمجة <a href='www.elazrak.me'>زكرياء الأزرق</a></p>
            </footer>
        )
    }
}
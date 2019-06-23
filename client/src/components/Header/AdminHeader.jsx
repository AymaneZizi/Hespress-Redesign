import React, { Component } from "react";
import UserAccount from "../UserAccount/UserAccount";
import { Link } from 'react-router-dom'

import './Header.css';

export default class AdminHeader extends Component {
    render() {
        return (
            <div className='Header' >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-2 col-lg-3 col-xs-2">
                            <Link to={`${this.props.url}`}><img src='/Assets/images/SVG/logo.svg' alt="hespres" className="logo" /></Link>
                        </div>
                        <div className="col-xl-8 col-lg-5 col-xs-8" />
                        <UserAccount className="col-xl-2 col-lg-4 col-xs-0" />
                    </div>
                </div>
            </div>
        );
    }
}

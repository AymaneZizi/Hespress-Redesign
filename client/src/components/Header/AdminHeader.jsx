import React, { Component } from "react";
import Menu from "../Menu/Menu";
import UserAccount from "../UserAccount/UserAccount";
import './Header.css';
import { Link } from 'react-router-dom'
export default class AdminHeader extends Component {
    render() {
        return (
            <div className='Header' >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-2 col-lg-3 col-xs-2">
                            <Link to={`${this.props.url}`}><div src='/Assets/images/SVG/logo-admin.svg' alt="hespres" className="logo">logo-admin </div></Link>
                        </div>
                        <Menu className="col-xl-8 col-lg-5 col-xs-8" />
                        <UserAccount className="col-xl-2 col-lg-4 col-xs-0" />
                    </div>
                </div>
            </div>
        );
    }
}

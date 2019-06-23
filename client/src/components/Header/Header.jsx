import React, { Component } from "react";
import { Link } from 'react-router-dom'

import Menu from "../Menu/Menu";
import UserAccount from "../UserAccount/UserAccount";
import './Header.css';


export default class Header extends Component {
  render() {
    return (
      <div className='Header' >
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-3 col-xs-2 logo-container">
              <Link to="/"><img src='/Assets/images/SVG/logo.svg' alt="hespres" className="logo" /></Link>
            </div>
            <Menu className="col-xl-8 col-lg-5 col-xs-8" />
            <UserAccount className="col-xl-2 col-lg-4 col-xs-0" />
          </div>
        </div>
      </div>
    );
  }
}

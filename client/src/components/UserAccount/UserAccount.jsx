import React, { Component } from "react";
import "./UserAccount.css";
import classNames from 'classnames'
import FormContainer from './FormContainer/FormContainer'
import { CSSTransition } from 'react-transition-group';


class UserAccount extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    }
  }

  showLogin = () => this.setState({ isOpen: true })

  hideLogin = () => this.setState({ isOpen: false });

  render() {
    return (
      <div className={classNames(this.props.className, 'UserAccount')}>
        <CSSTransition in={this.state.isOpen} timeout={200} classNames="formContainer" unmountOnExit>
          <FormContainer hide={this.hideLogin} />
        </CSSTransition>
        <button onClick={this.showLogin} className="btn-round btn-main login-button">تسجيل الدخول <span className="mbri-user" /></button>
      </div>
    )
  }
};

export default UserAccount;

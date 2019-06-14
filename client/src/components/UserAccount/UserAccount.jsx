import React, { Component } from "react";
import { connect } from 'react-redux';
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import FormContainer from './FormContainer/FormContainer'
import { logout } from 'actions/authActions'
import FloatBox from '../FloatBox/FloatBox'
import "./UserAccount.css";


class UserAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      showProfile: false
    }
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired
  }

  showLogin = () => this.setState({ isOpen: true })

  hideLogin = () => this.setState({ isOpen: false });

  render() {
    const loginSignUp = <>
      <CSSTransition in={this.state.isOpen} timeout={200} classNames="formContainer" unmountOnExit>
        <FloatBox hide={this.hideLogin}><FormContainer hide={this.hideLogin} /></FloatBox>
      </CSSTransition>
      <button onClick={this.showLogin} className="btn-round btn-main login-button">تسجيل الدخول <span className="mbri-user" /></button>
    </>

    const userProfile = this.props.isAuthenticated && <>
      <button onClick={() => this.setState({ showProfile: true })} className="profile btn-round btn-main">
        {this.props.user.name}
        <div className="profile-img" />
      </button>

      <CSSTransition in={this.state.showProfile} timeout={200} classNames="formContainer" unmountOnExit>
        <FloatBox hide={() => this.setState({ showProfile: false })}>
          <div className='profile-panel'>
            <Link to="" className="link"><i className="la la-user" />اعدادات الحساب</Link>
            <Link to="/admin" className="link"><i className="la la-gear" />ادارة الموقع</Link>

            <button className='link signout' onClick={this.props.logout}> <i className="la la-sign-out"></i>تسجيل الخروج</button>
          </div>
        </FloatBox>
      </CSSTransition>
    </>

    return (
      <div className={classNames(this.props.className, 'UserAccount')}>
        {this.props.isAuthenticated ? userProfile : loginSignUp}
      </div>
    )
  }
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
})

export default connect(mapStateToProps, { logout })(UserAccount)


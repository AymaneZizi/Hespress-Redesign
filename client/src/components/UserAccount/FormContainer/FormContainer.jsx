import React, { Component } from 'react'
import classNames from 'classnames';

import LoginForm from '../LoginForm/LoginForm'
import SignUpForm from '../SignUpForm/SignUpForm'
import './FormContainer.css'

export default class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switch: true
        }
    }

    showLogin = () => {
        this.setState({ switch: true })
    }

    showSignUp = () => {
        this.setState({ switch: false })
    }

    render() {
        const form = this.state.switch ? <LoginForm /> : <SignUpForm />
        const content = <div className={classNames('loginform', this.props.className)} >
            <div className='buttons'>
                <button onClick={this.showSignUp} className={classNames('btn-round', 'sign-up', { 'btn-main': !this.state.switch })}>حساب جديد</button>
                <button onClick={this.showLogin} className={classNames('btn-round', 'login', { 'btn-main': this.state.switch })}>تسجيل الدخول </button>
            </div>
            {form}
        </div>
        return (
            content
        )
    }
}

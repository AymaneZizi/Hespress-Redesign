import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { register } from 'actions/authActions.js'
import './SignUpForm.css'

class SignUpForm extends Component {
    state = {
        email: '',
        password: ''
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        //create user
        const user = { email, password }
        this.props.register(user);
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>

                <div className='formgroup'>
                    <input type='text' placeholder="البريد الالكتروني" className="email" onChange={this.onChange} name='email' />
                </div>
                <div className='formgroup'>
                    <input type='password' placeholder="كلمة المرور" className="password" onChange={this.onChange} name='password' />
                </div>

                <div className='formgroup'>
                    <input type='password' placeholder="تأكيد كلمة المرور" className="password" name='password-confirm' />
                </div>

                <div className='formgroup'>
                    <button className=''>تأكيد الحساب</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(mapStateToProps, { register })(SignUpForm)


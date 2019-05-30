import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './LoginForm.css'


class LoginForm extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired
    }

    render() {
        return (
            <div>
                <div className='formgroup'>
                    <input type='text' placeholder="البريد الالكتروني" className="username" name='username' />
                </div>
                <div className='formgroup'>
                    <input type='password' placeholder="كلمة المرور" className="password" name='password' />
                </div>

                <div className='formgroup'>
                    <button className=''>تسجيل الدخول</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})
export default connect(mapStateToProps, {})(LoginForm)

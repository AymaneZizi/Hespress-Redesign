import React, { Component } from 'react'
import './LoginForm.css'


export default class LoginForm extends Component {

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


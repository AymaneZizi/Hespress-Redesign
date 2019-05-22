import React, { Component } from 'react'
import './SignUpForm.css'

export default class SignUpForm extends Component {
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
                    <input type='password' placeholder="تأكيد كلمة المرور" className="password" name='confirm-password' />
                </div>

                <div className='formgroup'>
                    <button className=''>تأكيد الحساب</button>
                </div>
            </div>
        )
    }
}


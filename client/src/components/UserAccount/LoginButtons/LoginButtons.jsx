import React from 'react';
import './LoginButtons.css';

export default function LoginButtons(props) {
    return (
        <div className={props.className}>
            <button onClick={props.showLogin} className="btnn login">تسجيل الدخول </button>
            <button onClick={props.showSignUp} className="btnn sign-up">حساب جديد</button>
        </div>
    )
}
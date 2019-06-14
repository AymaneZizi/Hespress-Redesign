import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { register } from 'actions/authActions'
import { clearErrors } from 'actions/errorActions'
import Input from '../../Input/Input'
import './SignUpForm.css'

class SignUpForm extends Component {
    state = {
        email: '',
        password: '',
        confirmPassword: ''
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    componentDidUpdate(prevProps) {
        const { error } = this.props;
        if (error !== prevProps.error) {
            // Check for register error
            if (error.id === 'REGISTER_FAIL') {
                if (error.msg.msg === 'User already exists');
                this.setState({ msg: 'يوجد حساب اخر بهذا البريد الالكتروني' });
            } else {
                this.setState({ msg: null });
            }
        }
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
        const { name, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            this.setState({ msg: 'كلمات السر غير متطابقة' })
            return
        }
        //create user
        const user = { name, email, password }
        this.props.register(user);
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                {
                    this.state.msg && <div className="error">{this.state.msg}</div>
                }

                <Input
                    type="text"
                    name="name"
                    icon="user"
                    onChange={this.onChange}
                    value={this.state.name}
                    placeholder='الإسم الكامل'
                />

                <Input
                    type="email"
                    name="email"
                    icon="envelope"
                    onChange={this.onChange}
                    value={this.state.email}
                    placeholder='الإسم الالكتروني'
                />

                <Input
                    type="password"
                    name="password"
                    icon="lock"
                    onChange={this.onChange}
                    value={this.state.password}
                    placeholder='كلمةالمرور'
                />

                <Input
                    type="password"
                    name="confirmPassword"
                    icon="lock"
                    onChange={this.onChange}
                    value={this.state.confirmPassword}
                    placeholder='تأكيد كلمةالمرور'
                />

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

export default connect(mapStateToProps, { register, clearErrors })(SignUpForm)


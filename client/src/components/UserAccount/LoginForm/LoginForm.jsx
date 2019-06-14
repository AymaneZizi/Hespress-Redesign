import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './LoginForm.css'
import Input from '../../Input/Input'
import { login } from 'actions/authActions'


class LoginForm extends Component {
    state = {
        name: '',
        password: ''
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired
    }

    handleOnSubmit = e => {
        e.preventDefault();

        const { email, password } = this.state;

        const user = {
            email,
            password
        };

        // Attempt to login
        this.props.login(user);
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidUpdate(prevProps) {
        const { error } = this.props;
        if (error !== prevProps.error) {
            // Check for register error
            if (error.id === 'LOGIN_FAIL') {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null });
            }
        }
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                {
                    this.state.msg && <div className="error">{this.state.msg}</div>
                }
                <Input
                    type="text"
                    name="email"
                    icon="envelope"
                    onChange={this.onChange}
                    value={this.state.user}
                    placeholder='الايميل'
                />

                <Input
                    type="password"
                    name="password"
                    icon="lock"
                    onChange={this.onChange}
                    value={this.state.password}
                    placeholder='كلمة المرور'
                />


                <div className='formgroup'>
                    <button className=''>تسجيل الدخول</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})
export default connect(mapStateToProps, { login })(LoginForm)

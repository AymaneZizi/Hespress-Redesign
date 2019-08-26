import React, { Component, useState } from 'react'

import styles from './profile.module.css'
import Sep from '../FullWidthSep'

export class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: '',
            name: '',
            bio: '',
            email: '',
            tel: '',
            password: '',
            passwordConfirmation: ''
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
    }


    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onChangePassword = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            showConfirmPassword: true
        })
    }

    render() {
        return (

            <div className="container">
                <h3 className={styles.title}>اعدادت المستخدم</h3>
                <Sep color="#00bad7" />

                <div className={styles.profile}>
                    <div className={styles.info}>
                        <div className={styles.img}>
                            {this.state.img ? <img src={this.state.img} /> : <i class="la la-photo"></i>}
                        </div>
                        <div>
                            <Input onChange={this.onChange} className={styles.name} type="text" name='name' placeholder="الإسم" required />
                            <Input onChange={this.onChange} className={styles.desc} type="text" name='bio' placeholder="الوصف" required />
                        </div>
                    </div>


                    <form onSubmit={this.handleSubmit}>

                        <table className={styles.table}>
                            <tbody>
                                <tr>
                                    <td>
                                        الإيميل
                                    </td>
                                    <td>
                                        <Input onChange={this.onChange} type="email" name='email' placeholder="exemple@mail.com" required />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        رقم الهاتف
                                </td>
                                    <td>
                                        <Input onChange={this.onChange} type="tel" name='tel' placeholder="+000 00 00 00 00" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        كلمة المرور
                                </td>
                                    <td>
                                        <Input onChange={this.onChangePassword} type="password" name='password' placeholder="أدخل كلمة مرور جديدة" required />
                                    </td>
                                </tr>


                                {
                                    this.state.showConfirmPassword &&
                                    <tr>
                                        <td>
                                            تأكيد كلمة المرور
                                        </td>
                                        <td>
                                            <Input onChange={this.onChangePassword} type="password" name='passwordConfirmation' placeholder="أدخل كلمة مرور جديدة" required />
                                        </td>
                                    </tr>
                                }
                            </tbody>
                        </table>



                        <button type="submit">حفظ التغييرات</button>

                    </form>

                </div>
            </div>
        )
    }
}

const Input = (props) => {
    const [readOnly, setReadOnly] = useState(true);
    const enable = () => setReadOnly(false);
    const disable = () => setReadOnly(true);

    return (
        <div className={styles.input}>
            <input {...props} autofocus={!readOnly} readOnly={readOnly} onDoubleClick={enable} onBlur={disable} />
        </div>
    )
}

export default Profile

import React, { Component } from 'react'

import styles from './profile.module.css'
import Sep from '../FullWidthSep'

export class Profile extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (

            <div className="container">
                <h3>اعدادت المستخدم</h3>
                <Sep color="#00bad7" />

                <div className={styles.profile}>
                    <div className={styles.info}>
                        <div className={styles.img}>
                            <img src="" />
                        </div>
                        <div>
                            <Input className={styles.name} type="text" placeholder="الإسم" required />
                            <Input className={styles.desc} type="text" placeholder="الوصف" required />
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
                                        <Input type="email" placeholder="exemple@mail.com" required />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        رقم الهاتف
                                </td>
                                    <td>
                                        <Input type="tel" placeholder="+000 00 00 00 00" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        كلمة المرور
                                </td>
                                    <td>
                                        <Input type="password" placeholder="أدخل كلمة مرور جديدة" required />
                                    </td>
                                </tr>
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

    return < input {...props} readonly="true" onDoubleClick={e => e.target.readOnly = ''} onBlur={e => e.target.readOnly = 'true'} />
}

export default Profile

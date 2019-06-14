import React, { Component } from 'react'
import Input from '../../Input/Input'
import { CirclePicker } from 'react-color';
import Axios from 'axios';

import './AddCategory.css'
import PopUp from '../../PopUp/PopUp'


export default class AddCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            color: '',
            icon: '',
            message: ''
        }
    }


    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleChangeColor = (color, event) => {
        this.setState({ color: color.hex })
    }

    saveCategory = () => {
        const { name, icon, color } = this.state;
        Axios.post('/api/categories', { name, icon, color })
            .then(res => {
                this.showMessage('تم حفظ التنصيف بنجاح')
                setTimeout(this.props.hide, 1000)
            })
            .catch(err => this.showMessage(err.response.message))
    }


    showMessage = (message) => {
        this.setState({ message })
    }

    render() {
        return (
            <PopUp hide={this.props.hide}>
                <div className="AddCategory">
                    <h3>تصنيف جديد</h3>

                    <Input
                        type="text"
                        className='input'
                        name="name"
                        icon="tag"
                        onChange={this.onChange}
                        value={this.state.name}
                        placeholder='الاسم'
                        required
                    />

                    <Input
                        type="text"
                        name="icon"
                        className='input'
                        icon="toggle-down"
                        onChange={this.onChange}
                        value={this.state.icon}
                        placeholder='ايقونة'
                        required
                    />

                    <CirclePicker onChangeComplete={this.handleChangeColor} color={this.state.color} width={'100%'} />

                    <button onClick={this.saveCategory} className="btn btn-square">حفظ</button>

                    {this.state.message}
                </div>
            </PopUp>
        )
    }
}

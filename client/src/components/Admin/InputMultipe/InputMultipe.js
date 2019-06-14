import Axios from 'axios'
import React, { Component } from 'react'

import './InputMultipe.css'

export default class InputMultipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            suggestions: [],
            value: ''
        }
    }
    onChange = (e) => {
        //if input is empty, reset suggestions
        if (!e.target.value) {
            this.setState({ suggestions: [] })
            return
        }

        Axios.get(this.props.DataSrc, { params: { 'name': e.target.value } })
            .then(res => {
                console.log(res.data)
                this.setState({ suggestions: res.data })
            })
            .catch(err => console.log(err))
    }

    handleSelect = (_id, name) => {
        if (this.props.value.find(obj => obj._id === _id)) return
        this.props.onChange(this.props.name, [...this.props.value, { name, _id }])
    }

    handleRemove = (_id) => {
        this.props.onChange(this.props.name, this.props.value.filter(obj => obj._id !== _id))
    }

    render() {
        const { title, placeholder, name } = this.props;
        const { suggestions } = this.state;
        return (
            <div className="input-group">
                <h5>{title}</h5>
                <div className="selected">
                    {this.props.value.map(e => (
                        <div key={e._id}>
                            <span>{e.name}</span>
                            <i onClick={this.handleRemove.bind(this, e._id)} className="la la-minus-circle"></i>
                        </div>
                    ))}
                </div>
                <div className='input'><input autoComplete='off' type='text' placeholder={placeholder} onChange={this.onChange} name={name} /><span className="la la-search"></span></div>
                <div className="suggested">
                    {suggestions.map(e => (
                        <div key={e._id}>
                            <span>{e.name}</span>
                            <i onClick={this.handleSelect.bind(this, e._id, e.name)} className="la la-plus-circle"></i>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

// InputMultipe.propTypes = {
//     value: PropTypes.array.isRequired
// };
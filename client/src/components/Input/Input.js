import React from 'react'
import classNames from 'classnames'
import './Input.css'

export default function Input(props) {
    const { name, value, onChange, type, placeholder, style, required } = props;
    return (
        <div className={classNames("input", props.className)}>
            <input {...{ name, value, onChange, type, placeholder, style, required }} autoComplete="off" />
            <span className={`la la-${props.icon}`}></span>
        </div>
    )
}
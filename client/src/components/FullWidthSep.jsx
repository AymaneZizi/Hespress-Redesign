import React from 'react';
import './FullWidthSep.css'

export default function FullWidthSep(props) {
    return (
        <div className="line">
            <div style={{ width: "100%", background: props.color }} />
            <div style={{ width: 40, background: props.color }} />
            <div style={{ width: 20, background: props.color }} />
            <div style={{ width: 10, background: props.color }} />
        </div>
    )
}
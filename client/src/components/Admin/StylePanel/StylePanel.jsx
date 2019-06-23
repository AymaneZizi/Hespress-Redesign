import React from 'react'
import './StylePanel.css'

export default function StylePanel(props) {
    const _onClick = props.onClick;
    return (
        <div className="style-buttons">
            <button><span className="la la-align-right"></span></button>
            <button><span className="la la-align-center"></span></button>
            <button><span className="la la-align-left"></span></button>
            <button><span className="la la-align-justify"></span></button>
            <div className='vertical-sep' />
            <button onClick={_onClick}><span id='BOLD' className="la la-bold"></span></button>
            <button onClick={_onClick}><span id="ITALIC" className="la la-italic"></span></button>
            <button onClick={_onClick}><span id='UNDERLINE' className="la la-underline"></span></button>
            <div className='vertical-sep' />
            <button><span className="la la-photo"></span></button>
            <button><span className="la la-youtube-play"></span></button>
            <button><span className="la la-link"></span></button>
            <button><span className="la la-quote-right"></span></button>
            <button><span className="la la-list-ul"></span></button>
            <button><span className="la la-list-ol"></span></button>
        </div>
    )
}

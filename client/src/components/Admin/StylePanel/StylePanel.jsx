import React from 'react'
import './StylePanel.css'

export default function StylePanel(props) {
    const _onClick = props.onClick;
    return (
        <div className="style-buttons">
            <button><span className="mbri-align-right"></span></button>
            <button><span className="mbri-align-center"></span></button>
            <button><span className="mbri-align-left"></span></button>
            <button><span className="mbri-align-justify"></span></button>
            <div className='vertical-sep' />
            <button onClick={_onClick}><span id='BOLD' className="mbri-bold"></span></button>
            <button onClick={_onClick}><span id="ITALIC" className="mbri-italic"></span></button>
            <button onClick={_onClick}><span id='UNDERLINE' className="mbri-underline"></span></button>
            <div className='vertical-sep' />
            <button><span className="mbri-photo"></span></button>
            <button><span className="mbri-video"></span></button>
            <button><span className="mbri-link"></span></button>
            <button><span className="mbri-quote-right"></span></button>
            <button><span className="mbri-bulleted-list"></span></button>
            <button><span className="mbri-numbered-list"></span></button>
        </div>
    )
}

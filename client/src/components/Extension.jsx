import React from 'react';
import Sep from './Sep';

export default function Extenion(props) {
    return (
        <div className='col-lg-3'>
            <div className={props.className}>
                <h3>{props.title}</h3>
                <Sep color="white" />
                {props.children}
            </div>
        </div >
    )
}
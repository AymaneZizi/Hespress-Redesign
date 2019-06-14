import React from 'react'
import PopUp from '../PopUp/PopUp'

import './Confirm.css'

function Confirm(props) {

    const confirm = () => {
        props.onConfirm();
        props.hide();
    }

    return (
        <PopUp hide={props.hide}>
            <div className="confirm">
                <h3>{props.title}</h3>
                <div className='message'>
                    {props.message}
                </div>
                <div className='confirm-buttons'>
                    <button className='btn btn-square' onClick={confirm}>تأكيد</button>
                </div>
            </div>
        </PopUp>
    )
}

export default Confirm;
import React from 'react';

export default function Sep(props) {
    const sepStyle = {
        height: 4,
        width: 100,
        margin: '5px auto',
        backgroundColor: props.color,
        display: 'block'
    }

    return <div style={sepStyle}></div>
}
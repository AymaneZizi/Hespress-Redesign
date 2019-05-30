import React, { Component } from 'react'
import './SocialNetwork.css'

function processnumber(number) {
    if (number > 1000) return '+ ' + (number / 1000) + 'الف'
}

export default class SocialNetwork extends Component {


    render() {
        const SocialNetworkStyle = {
            borderColor: this.props.color,
            color: this.props.color
        }
        const nbfollowers = processnumber(this.props.nbfollowers);
        return (
            <a href={this.props.link} className="SocialNetwork" style={SocialNetworkStyle}>
                <h4>{this.props.name}</h4>
                <div className='icon'><img src={this.props.img} alt='facebook page' /></div>
                <div className='nbfollowers'>{nbfollowers}  متابع</div>
            </a>
        )

    }


}


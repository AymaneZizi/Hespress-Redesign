import React, { Component } from 'react';
import SocialNetwork from './SocialNetwork/SocialNetwork';

export default class Facebook extends Component {
    render() {
        const name = "فايسبوك";
        const nbfollowers = 10000;

        return (
            < SocialNetwork name={name} img='/Assets/images/SocialMedia/SVG/facebook.svg' link={this.props.link} nbfollowers={nbfollowers} color='#335f7f' />
        )
    }
}
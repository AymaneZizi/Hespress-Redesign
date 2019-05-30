import React, { Component } from 'react';
import SocialNetwork from './SocialNetwork/SocialNetwork';

export default class Youtube extends Component {
    render() {
        const name = "يوتيب";
        const nbfollowers = 10000;

        return (
            < SocialNetwork name={name} img='/Assets/images/SocialMedia/SVG/Youtube.svg' link={this.props.link} nbfollowers={nbfollowers} color='#db3737' />
        )
    }
}
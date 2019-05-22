import React, { Component } from 'react';
import SocialNetwork from './SocialNetwork/SocialNetwork';

export default class Instagram extends Component {
    render() {
        const name = "انستغرام";
        const nbfollowers = 10000;

        return (
            < SocialNetwork name={name} img='/Assets/images/SocialMedia/SVG/Instagram.svg' link={this.props.link} nbfollowers={nbfollowers} color='#333333' />
        )
    }
}
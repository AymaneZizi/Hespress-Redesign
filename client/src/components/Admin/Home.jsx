import React, { Component } from 'react';
import Articles from './Articles/Articles';


export class Home extends Component {

    render() {
        return (
            <div className="container">
                <Articles path={this.props.match.path} />
            </div>
        )
    }
}

export default Home

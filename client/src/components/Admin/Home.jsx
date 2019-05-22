import React, { Component } from 'react';
import Articles from './Articles/Articles';


export class Home extends Component {
    render() {
        return (
            <div className="container">
                <Articles />
            </div>
        )
    }
}

export default Home

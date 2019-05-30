import React, { Component } from "react";
import "./Ad.css";
export default class Ad extends Component {
  render() {
    const content = this.props.children ? this.props.children : <p>مساحة اعلانية</p>
    return (
      <div className='row' style={this.props.style}>
        <div className='ad col-lg-12'>
          {content}
        </div>
      </div>
    );
  }
}

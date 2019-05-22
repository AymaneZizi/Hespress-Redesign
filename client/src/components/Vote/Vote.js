import React, { Component } from 'react';
import './Vote.css'
import Sep from '../Sep';

export default class Vote extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className='Vote'>
                    {/* <div className='bg' /> */}
                    <h3>استطلاع هسبريس</h3>
                    {/* <span className='sep1' ></span> */}
                    <Sep color='white'></Sep>
                    <p>كيف كان أداء المنتخب المغربي خلال كأس العالم ؟</p>
                    <div className='circles'>
                        <div className="circle"><span className="lnr lnr-star"></span></div>
                        <div className="circle"><span className="lnr lnr-star"></span></div>
                        <div className="circle"><span className="lnr lnr-star"></span></div>
                        <div className="circle"><span className="lnr lnr-star"></span></div>
                        <div className="circle"><span className="lnr lnr-star"></span></div>
                    </div>

                    <button>تصويت</button>
                </div>
            </div>
        )
    }
}
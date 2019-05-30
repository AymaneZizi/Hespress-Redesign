import React, { Component } from 'react';
import { stateToHTML } from 'draft-js-export-html';
import axios from 'axios';
import { convertFromRaw } from 'draft-js'

import Ad from "../../Ad/Ad"
import './FullArticle.css'
import Info from '../Info/Info'
import Sep from '../../Sep';
import Comments from '../../Comments/Comments'
import moment from 'moment';
import countries from 'countries'

export default class FullArticle extends Component {
    state = {
        title: '',
        body: '',
        img: '',
        date: '',
        country: '',
        loading: true
    }

    componentDidMount = () => {

        const id = this.props.match.params.id;
        if (!id) return
        axios.get('/api/articles/' + id)
            .then(res => {
                let { title, body, img, date, country } = res.data;

                const contentState = convertFromRaw(JSON.parse(body))
                body = stateToHTML(contentState);

                this.setState({
                    id,
                    title,
                    body,
                    img,
                    date,
                    country,
                    loading: false
                })
            })
            .catch(err => alert(err));
    }
    render() {
        let { id, title, body, img, date, country } = this.state;

        const imageStyle = {
            background: `linear-gradient(0deg, rgb(255, 255, 255),rgba(255, 255, 255, 0),rgba(2, 173, 231, 0)), url(${img}) repeat`
        };

        date = moment(date).fromNow()


        return (
            <div className="container" >
                <Ad style={{ height: 180 }} />

                <div className="row ArticleContainer">
                    <div className="col-lg-9 FullArticle">
                        <div className="img" style={imageStyle}></div>
                        <h3 className='title'>{title}</h3>
                        <Info
                            countryCode={country}
                            time={date}
                        />
                        <article dangerouslySetInnerHTML={{ __html: body }}></article>


                        <Comments article={id}></Comments>
                    </div>
                    <div className="col-lg-3">
                        <div className="ArticleInformations">
                            <h3>معلومات متوفرة</h3>
                            <Sep color='gray' />
                            <h4>البلد</h4>
                            <p>{country && countries.find(obj => obj.code === country).name_ar}</p>

                            <h4>شخصيات متعلقة</h4>
                            <p>رجب طيب اردوغان</p>

                            <h4>احداث متعلقة</h4>
                            <p>الانقلاب العسكري بتركيا</p>

                            <h4>اخبار متعلقة</h4>
                            <p>تركيا</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
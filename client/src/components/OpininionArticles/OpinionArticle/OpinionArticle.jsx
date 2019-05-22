import React, { Component } from "react";
import './OpinionArticle.css'
import Palette from "react-palette";


export default class OpinionArticle extends Component {
    constructor(props) {
        super();

        this.imgstyle = {
            background: `linear-gradient(0deg, rgb(255, 255, 255), rgba(255, 255, 255, 1),rgba(255, 255, 255, 0),rgba(255, 255, 255, 0)), url(${props.article.img}) repeat`
        };
    }

    render() {
        const ArticleTitle = this.props.article.title;
        const title = ArticleTitle.length > 40 ? ArticleTitle.slice(0, ArticleTitle.indexOf(' ', 40)) + '...' : ArticleTitle;
        return (
            <div className={this.props.className}>
                <div className="OpinionArticle">
                    <div className="img" style={this.imgstyle} />

                    <Palette image={this.props.article.img}>
                        {palette => (
                            <h3 className='head' style={{ color: palette.darkVibrant }}>
                                {title}
                            </h3>
                        )}
                    </Palette>

                    <img className='separator' src='/Assets/images/SVG/separator.svg' alt='just icon' />

                    <div className="AuthorInfo">
                        <div className="imgAuthor" style={{ background: `url(${this.props.article.img})` }} />
                        <div>
                            <h3>زكرياء الأزرق</h3>
                            <p>باحث في مجال الذكاء الاصطناعي</p>
                        </div>
                    </div>

                </div>
            </div >
        );
    }
}


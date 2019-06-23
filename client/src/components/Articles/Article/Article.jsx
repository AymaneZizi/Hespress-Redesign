import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./Article.css";
import Info from "../Info/Info";
import Palette from "react-palette";
import moment from "moment";
import ar from "moment/locale/ar-ma";

export class Article extends Component {

  imgstyle = {
    background: this.props.small
      ? `url(${this.props.img}) repeat`
      : `linear-gradient(0deg, rgb(255, 255, 255), rgba(255, 255, 255, 0.80),rgba(255, 255, 255, 0),rgba(2, 173, 231, 0)), url(${
      this.props.img
      }) repeat`
  };

  render() {
    moment().locale("ar", ar)
    let { _id, title, img, className, small, country, date } = this.props;
    date = moment(date).fromNow()

    return (

      <div className={className}>
        <div className={small ? "smallArticle" : "article"}>
          <div className="img" style={this.imgstyle} />
          <div className="head">
            <Palette image={img}>
              {palette => (
                <Link to={`/article/${_id}`}>
                  <h3 style={{ color: palette.darkVibrant }}>
                    {title}
                  </h3>
                </Link>
              )}
            </Palette>
            <Info
              countryCode={country}
              time={date}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Article;

import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./Article.css";
import Info from "../Info/Info";
import Palette from "react-palette";

export class Article extends Component {
  constructor(props) {
    super();

    this.imgstyle = {
      background: props.small
        ? `url(${props.article.img}) repeat`
        : `linear-gradient(0deg, rgb(255, 255, 255), rgba(255, 255, 255, 0.80),rgba(255, 255, 255, 0),rgba(2, 173, 231, 0)), url(${
        props.article.img
        }) repeat`
    };
  }

  render() {
    const article = this.props.article;
    return (
      <div className={this.props.className}>
        <div className={this.props.small ? "smallArticle" : "article"}>
          <div className="img" style={this.imgstyle} />
          <div className="head">
            <Palette image={article.img}>
              {palette => (
                <Link to={`/Articles/${article.id}`}>
                  <h3 style={{ color: palette.darkVibrant }}>
                    {article.title}
                  </h3>
                </Link>
              )}
            </Palette>
            <Info
              country={article.country}
              time={article.date}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Article;

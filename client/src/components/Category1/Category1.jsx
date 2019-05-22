import React, { Component } from "react";
import Articles from "../fakeArticles";
import Article from "../Articles/Article/Article";
import "./Category1.css";
import Sep from 'components/FullWidthSep'

export class Category1 extends Component {
  constructor(props) {
    super();
    this.Category = {
      id: 1,
      name: "أخبار دولية"
    };
  }
  render() {
    const articles = Articles.slice(0, 6).map(article => (
      <Article
        small
        key={article.id}
        article={article}
        className="col-lg-6 col-md-12"
      />
    ))
    return (
      <div className={this.props.className}>
        <div className="Category1">
          <h3 className="title" style={{ color: this.props.color }}>
            <span
              style={{ fontSize: 26, marginLeft: 10 }}
              className="lnr lnr-earth"
            />
            <span>{this.props.category}</span>
          </h3>
          <Sep color={this.props.color} />
          <div className="row">
            {articles}
          </div>
        </div>
      </div>
    );
  }
}

export default Category1;

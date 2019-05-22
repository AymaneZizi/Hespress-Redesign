import React, { Component } from "react";
import Article from "./Articles/Article/Article";
import { articles } from "./fakeArticles";
export class Category extends Component {

  render() {
    const bigArticles = articles.slice(0, 3).map(article => (
      <Article
        key={article.id}
        article={article}
        className="col-lg-4 col-md-12"
      />
    ))

    const smallArticles = articles.slice(3, 7).map(article => (
      <Article
        small
        key={article.id}
        article={article}
        className="col-lg-6 col-md-12"
      />
    ))

    return (
      <div className="row" style={this.props.style}>
        {bigArticles}
        {smallArticles}
      </div>
    );
  }
}



export default Category;

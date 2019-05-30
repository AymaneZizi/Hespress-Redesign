import React, { Component } from "react";
import axios from "axios";

import Article from "../Articles/Article/Article";


export class PopularArticles extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    axios.get('/api/articles')
      .then(res => this.setState({ articles: res.data }))
  }

  render() {
    const { articles } = this.state;
    const bigArticles = articles.slice(0, 3).map(article => (
      <Article
        key={article._id}
        {...article}
        className="col-lg-4 col-md-12"
      />
    ))

    const smallArticles = articles.slice(3, 7).map(article => (
      <Article
        small
        key={article._id}
        {...article}
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



export default PopularArticles;

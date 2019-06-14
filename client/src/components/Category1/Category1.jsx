import React, { Component } from "react";
import Axios from "axios";
import Loading from '../Loading/Loading'

// import Articles from "../fakeArticles";
import Article from "../Articles/Article/Article";
import "./Category1.css";
import Sep from 'components/FullWidthSep'
export class Category1 extends Component {
  state = {
    articles: [],
    loading: true
  }

  componentDidMount() {
    Axios.get(`api/categories/${this.props.category}/articles`)
      .then(res => this.setState({ articles: res.data, loading: false }))
      .catch(err => console.log(err))
  }

  render() {
    const { articles } = this.state

    if (this.state.loading) return <Loading />

    return (
      <div className={this.props.className}>
        <div className="Category1">
          <h3 className="title" style={{ color: this.props.color }}>

            <span style={{ fontSize: 26, marginLeft: 10 }} className="mbri-globe"></span>

            <span>{this.props.category}</span>
          </h3>
          <Sep color={this.props.color} />
          <div className="row">
            {
              articles.slice(0, 6).map(article => (

                <Article
                  small
                  key={article._id}
                  {...article}
                  className="col-lg-6 col-md-12"
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}



export default Category1;

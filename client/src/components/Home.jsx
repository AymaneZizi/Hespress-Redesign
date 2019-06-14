import React, { Component } from "react";
import PopularArticles from "./PopularArticles/PopularArticles";
import Category from "./Category1/Category1";
import Ad from "./Ad/Ad";
import SocialMedia from "./SocialMedia/SocialMedia";
import Vote from "./Vote/Vote";
import OpinionArticles from "./OpininionArticles/OpinionArticles";
export class Home extends Component {
  render() {
    return (
      <div className="container">

        <Ad style={{ height: 180 }} />

        <PopularArticles style={{ margin: "20px 0" }} />

        <div className="row" style={{ margin: "20px 0" }}>
          <Category color="#b22947" category="السياسة" icon="" className="col-lg-9 col-md-12" />
          <Vote className="col-lg-3" />
        </div>

        <Ad style={{ height: 380 }} />

        <div className="row" style={{ margin: "20px 0" }}>
          <SocialMedia className="col-lg-3" />
          <Category color="#154560" category="الاقتصاد" icon="" className="col-lg-9 col-md-12" />
        </div>


        <OpinionArticles></OpinionArticles>
      </div>
    );
  }
}

export default Home;

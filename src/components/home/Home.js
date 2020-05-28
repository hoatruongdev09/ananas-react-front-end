import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import "./style.css";

import HomeBanner from "./images/banner.jpg";
import BannerClothing from "./images/Banner-mobile_Clothing.jpg";

import ShortNews from "./ShortNews.js";
import SaleNews from "./SaleNews.js";
import ShopCategory from "./ShopCategory.js";
import BestSeller from "./BestSeller.js";
import NewPaper from "./NewPaper.js";

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <this.homeBanner imgURL={HomeBanner} />
        <this.featureView />
        <ShopCategory />
        <BestSeller />
        <this.homeBanner imgURL={BannerClothing} />
        <NewPaper />
      </div>
    );
  }

  homeBanner(props) {
    return (
      <Container fluid hidden-sm="true" hidden-md="true" className="px-0">
        <div className="home-banner">
          <a href="#">
            <img src={props.imgURL} />
          </a>
        </div>
      </Container>
    );
  }
  featureView() {
    return (
      <Container hidden-sm="true" hidden-md="true" className="feature-view">
        <Row>
          <ShortNews />
          <SaleNews />
        </Row>
      </Container>
    );
  }
}

export default Home;

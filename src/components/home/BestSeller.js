import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBView,
} from "mdbreact";

import figure from "./images/banner.jpg";

import "./style.css";
let bestSellerFakeData = [
  {
    imgURL: figure,
    link: "",
    name: "Baseball Cap - Be Positive",
    color: "Pink",
    price: "275.000",
  },
  {
    imgURL: figure,
    link: "",
    name: "Baseball Cap - Be Positive",
    color: "Pink",
    price: "275.000",
  },
  {
    imgURL: figure,
    link: "",
    name: "Baseball Cap - Be Positive",
    color: "Pink",
    price: "275.000",
  },
  {
    imgURL: figure,
    link: "",
    name: "Baseball Cap - Be Positive",
    color: "Pink",
    price: "275.000",
  },
  {
    imgURL: figure,
    link: "",
    name: "Baseball Cap - Be Positive",
    color: "Pink",
    price: "275.000",
  },
  {
    imgURL: figure,
    link: "",
    name: "Baseball Cap - Be Positive",
    color: "Pink",
    price: "275.000",
  },
  {
    imgURL: figure,
    link: "",
    name: "Baseball Cap - Be Positive",
    color: "Pink",
    price: "275.000",
  },
  {
    imgURL: figure,
    link: "",
    name: "Baseball Cap - Be Positive",
    color: "Pink",
    price: "275.000",
  },
  {
    imgURL: figure,
    link: "",
    name: "Baseball Cap - Be Positive",
    color: "Pink",
    price: "275.000",
  },
  {
    imgURL: figure,
    link: "",
    name: "Baseball Cap - Be Positive",
    color: "Pink",
    price: "275.000",
  },
  {
    imgURL: figure,
    link: "",
    name: "Baseball Cap - Be Positive",
    color: "Pink",
    price: "275.000",
  },
  {
    imgURL: figure,
    link: "",
    name: "Baseball Cap - Be Positive",
    color: "Pink",
    price: "275.000",
  },
];
class BestSeller extends Component {
  constructor(props) {
    super(props);
    this.sellerItem = this.sellerItem.bind(this);
    this.state = {
      bestSellerData: [],
    };
  }
  componentDidMount() {
    this.setState({
      bestSellerData: this.prepareData(),
    });
  }
  prepareData() {
    let rawData = bestSellerFakeData;
    let data = [];
    while (rawData.length > 0) {
      data.push(rawData.splice(0, 4));
    }
    return data;
  }
  render() {
    console.log("seller data: ", this.state.bestSellerData);
    return (
      <Container fluid className="best-seller">
        <Row className="shop-category-title">
          <Col md="12">
            <h3>BEST SELLER</h3>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <MDBContainer>
              <MDBCarousel
                activeItem={1}
                length={this.state.bestSellerData.length}
                slide={true}
                showControls={true}
                showIndicators={false}
              >
                <MDBCarouselInner>
                  {this.state.bestSellerData.map((data, index) => {
                    return (
                      <MDBCarouselItem itemId={index + 1}>
                        <this.groupSellerItem items={data} />
                      </MDBCarouselItem>
                    );
                  })}
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBContainer>
          </Col>
        </Row>
      </Container>
    );
  }
  groupSellerItem(props) {
    return (
      <Row>
        {props.items.map((item) => {
          return (
            <div className="best-seller-item">
              <div className="best-seller-content">
                <img className="best-seller-image" src={item.imgURL} />
              </div>
              <div className="best-seller-info">
                <h3 className="best-seller-name">
                  <a href={item.link}>{item.name}</a>
                </h3>
                <h3 className="best-seller-color">{item.color}</h3>
                <h3 className="best-seller-price">{item.price} VND</h3>
              </div>
            </div>
          );
        })}
      </Row>
    );
  }
  sellerItem(props) {
    return (
      <div className="best-seller-item">
        <div className="best-seller-content">
          <img className="best-seller-image" src={props.imgURL} />
        </div>
        <div className="best-seller-info">
          <h3 className="best-seller-name">
            <a href={props.link}>{props.name}</a>
          </h3>
          <h3 className="best-seller-color">{props.color}</h3>
          <h3 className="best-seller-price">{props.price} VND</h3>
        </div>
      </div>
    );
  }
}

export default BestSeller;

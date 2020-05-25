import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from "mdbreact";

import "./style.css";

class ShortNews extends Component {
  constructor() {
    super();
  }
  carouselItem(props) {
    return (
      <MDBCarouselItem itemId={props.itemId}>
        <MDBView className="short-new-view">
          <img src={props.imgURL} alt="First slide" />
          <MDBMask overlay="black-light" />
        </MDBView>
        <div className="short-new-content">
          <h3 className="sale-content-title">{props.title}</h3>
          <h3 className="sale-content-description">{props.description}</h3>
        </div>
      </MDBCarouselItem>
    );
  }
  render() {
    return (
      <Col xs="6" sm="6" md="6" lg="6">
        <MDBContainer className="show-new-slide">
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={false}
            showIndicators={false}
            className="z-depth-1"
          >
            <MDBCarouselInner>
              <this.carouselItem
                itemId="1"
                imgURL="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                title="ALL BLACK IN BLACK"
                description="Mặc dù được ứng dụng rất nhiều, nhưng sắc đen lúc nào cũng toát lên một vẻ huyền bí không nhàm chán."
              />
              <this.carouselItem
                itemId="2"
                imgURL="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                title="ANANAS CREAS FLIP-FLAP"
                description="Khi sự tích cực, trung thực và ngẫu hứng trở thành tiêu chí sống; niềm vui sẽ xuất hiện ở mọi nơi."
              />
              <this.carouselItem
                itemId="3"
                imgURL="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                title='BÌNH MỚI RƯỢU "mới"'
                description="Vẫn kế thừa vẻ tối giản, nguyên bản và được định hướng bởi cái tên, Basas mới trở lại với những cải tiến đáng giá chắc chắn sẽ đem đến một trải nghiệm thú vị như hành trình chúng tôi làm ra nó."
              />
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
      </Col>
    );
  }
}

export default ShortNews;

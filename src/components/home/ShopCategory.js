import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import "./style.css";
import menuMale from "./images/Menu_Nam.jpg";
import menuFemale from "./images/Menu_Nu.jpg";
import catalog from "./images/catalogy-3.jpg";

class ShopCategory extends Component {
  render() {
    return (
      <Container className="shop-category">
        <Row className="shop-category-title">
          <Col md="12">
            <h3>DANH MỤC MUA HÀNG</h3>
          </Col>
        </Row>
        <Row>
          <this.Category
            title="giày nam"
            links={["new arrivals", "best seller", "sell-off"]}
            image={menuMale}
          />
          <this.Category
            title="giày nữ"
            links={["new arrivals", "best seller", "sell-off"]}
            image={menuFemale}
          />
          <this.Category
            title="dòng sản phẩm"
            links={["basas", "vintas", "urbas", "pattas"]}
            image={catalog}
          />
        </Row>
      </Container>
    );
  }
  Category(props) {
    return (
      <Col xs="4" sm="4" md="4" lg="4" className="shop-category-item">
        <div className="item-bg">
          <div className="item-cover"></div>
          <img src={props.image} />
        </div>
        <div className="item-group">
          <a href="#" className="item-group-title">
            {props.title}
          </a>
          {props.links.map((link) => {
            return (
              <a href="#" className="item-group-sub">
                {link}
              </a>
            );
          })}
        </div>
      </Col>
    );
  }
}

export default ShopCategory;

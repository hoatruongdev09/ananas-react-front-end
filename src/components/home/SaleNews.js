import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import "./style.css";

function SaleNews() {
  return (
    <Col xs="6" sm="6" md="6" lg="6">
      <div className="sale-adv">
        <a href="#">
          <img />
        </a>
      </div>
      <div className="sale-content">
        <h3 className="sale-content-title">OUTLET SALE</h3>
        <h3 className="sale-content-description">
          Danh mục những sản phẩm bán tại Outlet Store, đã được phát hành trước
          một thời gian và đang rơi vào tình trạng bể size, hết mã.
        </h3>
      </div>
    </Col>
  );
}

export default SaleNews;

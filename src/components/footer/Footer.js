import React, { Component } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import LogoFooter from "./Logo_Ananas_Footer.svg";
import StoreImage from "./Store.svg";
class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container fluid hidden-xs="true" hidden-sm="true" className="footer">
        <Row>
          <Col md="3" className="sec-search">
            <img src={StoreImage} />
            <Button href="#" className="btn-search-shop">
              TÌM CỬA HÀNG
            </Button>
          </Col>
          <Col md="9" className="sec-cont">
            <Row className="sec-cont-menu">
              <Col md="3">
                <a href="#" className="menu-title">
                  SẢM PHẨM
                </a>
                <ul>
                  <li>
                    <a href="#">Giày Nam</a>
                  </li>
                  <li>
                    <a href="#">Giày Nữ</a>
                  </li>
                  <li>
                    <a href="#">Thời tran & Phụ kiện</a>
                  </li>
                  <li>
                    <a href="#">Sale-off</a>
                  </li>
                </ul>
              </Col>
              <Col md="3">
                <a href="#" className="menu-title">
                  VỀ CÔNG TY
                </a>
                <ul>
                  <li>
                    <a href="#">Dứa tuyển dụng</a>
                  </li>
                  <li>
                    <a href="#">Liên hệ nhượng quyền</a>
                  </li>
                  <li>
                    <a href="#">Về Ananas</a>
                  </li>
                </ul>
              </Col>
              <Col md="3">
                <a href="#" className="menu-title">
                  HỖ TRỢ
                </a>
                <ul>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">Bảo mật thông tin</a>
                  </li>
                  <li>
                    <a href="#">Chính sách chung</a>
                  </li>
                  <li>
                    <a href="#">Tra cứu đơn hàng</a>
                  </li>
                </ul>
              </Col>
              <Col md="3">
                <a href="#" className="menu-title">
                  LIÊN HỆ
                </a>
                <ul>
                  <li>
                    <a href="#">Email góp ý</a>
                  </li>
                  <li>
                    <a href="#">Hotline</a>
                  </li>
                  <li>
                    <a href="#">0989212164</a>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <h4 className="menu-title">ANANAS SOCIAL</h4>
              </Col>
              <Col md="3">
                <h4 className="menu-title">ĐĂNG KÝ NHẬN EMAIL</h4>
              </Col>
              <Col md="3">
                <a href="#">
                  <img src={LogoFooter} />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
  Carousel,
  CarouselItem,
} from "react-bootstrap";

import "./style.css";

import LogoBrand from "./Logo_Ananas_Header.svg";
import DiscoverYOU from "./DiscoverYOU.svg";
import IconSignIn from "./icon_dang_nhap.svg";
import IconCart from "./icon_gio_hang.svg";
import IconHeart from "./icon_heart_header.svg";
import IconBill from "./icon_tra_cuu_don_hang.svg";
import IconShop from "./icon_tim_cua_hang.svg";
class Header extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.hideCarouselIndicators();
  }
  hideCarouselIndicators() {
    document.getElementsByClassName("carousel-indicators").item(0).innerHTML =
      "";
  }
  render() {
    return (
      <Container fluid hidden-sm="true" hidden-md="true">
        <Row>
          <ul className="menu">
            <li>
              <a href="#">
                <img src={IconBill} />
                &ensp; Tra cứu đơn hàng
              </a>
            </li>
            <li>
              <a href="#">
                <img src={IconShop} />
                &ensp; Tìm cửa hàng
              </a>
            </li>
            <li>
              <a href="#">
                <img src={IconHeart} />
                &ensp; Yêu thích
              </a>
            </li>
            <li>
              <a href="#">
                <img src={IconSignIn} />
                &ensp; Đăng nhập
              </a>
            </li>
            <li>
              <a href="#">
                <img src={IconCart} />
                &ensp; Giỏ hàng (0)
              </a>
            </li>
          </ul>
        </Row>
        <Row>
          <Navbar bg="light" expand="lg" className="center">
            <Navbar.Brand href="/home" className="navbar-header">
              <img src={LogoBrand} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="navbar-nav">
              <Nav>
                <NavDropdown
                  title="SẢN PHẨM"
                  id="basic-nav-dropdown"
                ></NavDropdown>
                <NavDropdown title="NAM" id="basic-nav-dropdown"></NavDropdown>
                <NavDropdown title="NỮ" id="basic-nav-dropdown"></NavDropdown>
                <Nav.Link href="#home">SALE OFF</Nav.Link>
                <Nav.Link href="#link">
                  <img src={DiscoverYOU} />
                </Nav.Link>
              </Nav>
              <Form className="search-form">
                <FormControl
                  type="text"
                  placeholder="Tìm kiếm"
                  className="mr-sm-2"
                />
                <Button variant="dark">Tìm</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </Row>
        <Row>
          <div className="hot-new">
            <Carousel className="hot-new-carousel">
              {this.createCarouselItem({
                link: "#",
                news: "BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN",
              })}
              {this.createCarouselItem({
                link: "#",
                news: "FREE SHIPPING VỚI HOÁ ĐƠN TỪ 800K !",
              })}
              {this.createCarouselItem({
                link: "#",
                news: "HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH",
              })}
            </Carousel>
          </div>
        </Row>
      </Container>
    );
  }

  createCarouselItem(info) {
    return (
      <Carousel.Item className="hot-new-carousel-item">
        <div className="news-item">
          <a href={info.link}>{info.news}</a>
        </div>
      </Carousel.Item>
    );
  }
}

export default Header;

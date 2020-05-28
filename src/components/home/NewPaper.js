import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

class NewPaper extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container className="newspaper">
        <Row>
          <Col md="6" xs="6" lg="6">
            <Row>
              <div className="newspaper-title">
                <h3>instagram</h3>
              </div>
            </Row>
          </Col>
          <Col md="6" xs="6" lg="6">
            <Row>
              <div className="newspaper-title">
                <h3>tin tức & bài viết</h3>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default NewPaper;

import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import Home from "./components/home/Home.js";

class App extends Component {
  render() {
    return (
      <div className="content">
        <Header />
        <this.route />
        <Footer />
      </div>
    );
  }

  route() {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

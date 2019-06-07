import React, { Component } from "react";
import "./App.css";
import Axios from "axios";
import { Container } from "react-bootstrap";
import Nav from "./components/sections/Nav";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Account from "./pages/Account";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    Axios(`/api/message`)
      .then(res => {
        this.setState({
          messages: res.data || false,
          error: null
        });
      })
      .catch(err => {
        if (err.response) {
          this.setState({
            error: err.response.status
          });
        } else {
          this.setState({
            error: 500
          });
        }
      })
      .finally(() => {
        this.setState({
          isLoading: false
        });
      });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Nav />
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/account" component={Account} />
              <Route path="/about" component={About} />
            </Switch>
          </Container>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Axios from "axios";
import Nav from "./components/sections/Nav";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Account from "./pages/Account";
import ProductPage from "./pages/ProductPage";
import ShoppingCardProvider from "./components/providers/ShoppingCardProvider";


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
          <ShoppingCardProvider>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/account" component={Account} />
              <Route path="/about" component={About} />
              <Route
                path="/product/:product_name"
                component={ProductPage}
              />
            </Switch>
          </ShoppingCardProvider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

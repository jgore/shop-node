import React from "react";
import { Row } from "react-bootstrap";
import CategoryList from "../components/sections/CategoryList";
import ProductList from "../components/sections/ProductList";
import Axios from "axios";

class Home extends React.Component {
  state = {
    categories: [],
    products: []
  };

  componentDidMount() {
    Axios({
      url: `${process.env.REACT_APP_API_URL}/api/pages`,
      method: "GET"
    })
      .then(response => {
        console.log(response);
        this.setState({
          categories: response.data.categories,
          products: response.data.products
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {/* <Carousel /> */}
        <Row>
          <CategoryList categories={this.state.categories} />
          <ProductList products={this.state.products} />
        </Row>
      </div>
    );
  }
}

export default Home;

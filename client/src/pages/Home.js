import React from "react";
import { Row } from "react-bootstrap";
import CategoryList from "../components/sections/CategoryList";
import ProductList from "../components/sections/ProductList";
import Axios from "axios";

class Home extends React.Component {
  state = {
    categories: [],
    products: [],
    popular: []
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
          products: response.data.products,
          popular: response.data.popular
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Row>
          <CategoryList categories={this.state.categories} />
          <ProductList
            products={this.state.popular}
            rest={{
              sm: 12,
              md: 9,
              style: { background: "lightgray", paddingTop: "5rem", paddingBottom: "4rem" }
            }}
          >
            <h4 style={{ position: "absolute", zIndex: 10, top: 20 }}>Rekomendowane dla Ciebie</h4>
          </ProductList>
          <ProductList
            products={this.state.products}
            rest={{ sm: 12, md: { span: 9, offset: 3 } }}
          />
        </Row>
      </div>
    );
  }
}

export default Home;

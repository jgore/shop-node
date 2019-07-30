import React from "react";
import CategoryList from "../components/sections/CategoryList";
import ProductList from "../components/sections/ProductList";
import Axios from "axios";
import { Container, Col, Row } from "react-bootstrap";
import './Home.css';

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
    console.log(this.state.products);
    return (
      <React.Fragment>
        <CategoryList categories={this.state.categories} />
        <Container className='wrapper' fluid={true}>
          <Row>
            <Col
              sm={{ span: 12 }}
              style={{ backgroundImage: `url('img/banner.jpg')` }}
              className="banner"
            />
            <ProductList products={this.state.products} rest={{ sm: 12 }} />
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;

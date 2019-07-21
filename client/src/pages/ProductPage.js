import React from "react";
import Axios from "axios";
import { Spinner, Container, Row, Col } from "react-bootstrap";
import "./ProductPage.css";

class ProductPage extends React.Component {
  state = {};

  componentDidMount = () => {
    Axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/api/pages/${
        this.props.location.state._id
      }`
    }).then(res => {
      this.setState({
        product: { ...res.data }
      });
    });
  };
  render = () => {
    return (
      <React.Fragment>
        {this.state.product ? (
          <Container>
            <Row>
              <Col sm={12} md={6} style={{ paddingTop: "2rem" }}>
                <img
                  src={`../img/${this.state.product.hero_image}`}
                  className="offer-header__hero-image"
                />
              </Col>
              <Col sm={12} md={6} style={{ paddingTop: "2rem" }}>
                <div className="product-info">
                  <h4>{this.state.product.name}</h4>
                </div>
              </Col>
            </Row>
          </Container>
        ) : (
          <div className="spinner">
            <Spinner
              animation="border"
              role="status"
              style={{ width: 100, height: 100 }}
            >
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        )}
      </React.Fragment>
    );
  };
}

export default ProductPage;

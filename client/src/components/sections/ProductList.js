import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import ReactStars from "react-stars";
import getSlug from "speakingurl";
import Price from "../special/Price";

export default withRouter(props => {
  const { products, rest, history } = props;
  return (
    <Col {...rest} className="products-list">
      {props.children}
      {products.map((value, index) => {
        return (
          <Card key={index} className="products-list__item">
            <Card.Body>
              <div
                style={{ backgroundImage: `url('img/${value.hero_image}')` }}
                className="product-image"
              />
              <Card.Title>{value.name}</Card.Title>
              <Card.Text>
                <p className="rating-label">
                  <ReactStars
                    color2={"gold"}
                    size={20}
                    count={5}
                    value={value.rate}
                    edit={false}
                  />
                </p>
                <Price price={value.price} currency={value.currency} className="price-label"/>
              </Card.Text>
              <Button
                className="button-link"
                variant="warning"
                onClick={() =>
                  history.push(`/product/${getSlug(value.name)}`, {
                    _id: value._id
                  })
                }
              >
                Szczegóły
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </Col>
  );
});

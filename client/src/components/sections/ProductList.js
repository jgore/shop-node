import React from "react";
import { Col, Card, Button } from "react-bootstrap";

export default ({ products }) => {
  return (
    <Col sm={12} md={9} className="products-list">
      {products.map((value, index) => {
        return (
          <Card
            key={index}
            style={{
              width: "14rem",
              marginBottom: "1rem",
              marginLeft: "0.5rem",
              marginRight: "0.5rem"
            }}
          >
            <Card.Img variant="top" src="img/mock.jpeg" />
            <Card.Body>
              <Card.Title>{value.name}</Card.Title>
              <Card.Text>
                {value.price} {value.curreny}
              </Card.Text>
              <Button variant="primary">Szczegóły</Button>
            </Card.Body>
          </Card>
        );
      })}
    </Col>
  );
};

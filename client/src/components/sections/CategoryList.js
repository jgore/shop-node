import React from "react";
import { ListGroup, Col } from "react-bootstrap";

export default ({ categories }) => {
  return (
    <Col sm={12} md={3} className="category-list">
      <ListGroup>
        {categories.map((value, index) => (
          <ListGroup.Item key={index}>
            {value.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Col>
  );
};

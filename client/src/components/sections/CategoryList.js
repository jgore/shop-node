import React from "react";
import { ListGroup, Col, Container } from "react-bootstrap";

export default ({ categories }) => {
  return (
    <div className="category-list">
      <div className="category-container">
        {categories.map((value, index) => {
          console.log(value);
          return <div className="category-list__item">{value.name}</div>;
        })}
      </div>
    </div>
  );
};

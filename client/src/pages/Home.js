import React from "react";
import Carousel from "../components/sections/home/Carousel";
import { Row, ListGroup, Col } from "react-bootstrap";

export default () => (
  <div>
    {/* <Carousel /> */}
    <Row>
      <Col sm={3}>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  </div>
);

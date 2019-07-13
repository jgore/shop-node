import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";

class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Row>
        <Col sm={12}>
          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
            style={{
              border: "1px solid lightgray",
              marginTop: "2rem"
            }}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./img/shoes1.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./img/shoes2.jpeg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./img/shoes3.jpeg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    );
  }
}

export default ControlledCarousel;

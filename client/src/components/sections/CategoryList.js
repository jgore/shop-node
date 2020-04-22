import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container
} from "react-bootstrap";

export default ({ categories }) => {
  const [state, setState] = React.useState({
    leftLinePosition: 0,
    isVisible: false,
    widthLine: 0
  });

  return (
    <Navbar expand="md"
      style={{
        padding: "0",
        borderBottom: "none",
        height: '5rem'
      }}>
      <div className="category-list" style={{ height: '100%' }}>
        <div
          className="category-container d-flex justify-content-center  h-100"
          onMouseLeave={() => {
            setState({ ...state, isVisible: false, widthLine: 0 });
          }}
        >
          <div
            className="line"
            style={{
              left: state.leftLinePosition,
              width: state.widthLine,
              opacity: state.isVisible ? 1 : 0
            }}
          />
          {categories.map((value, index) => {
            return (
              <div
                className="category-list__item"
                style={{ height: '100%' }}
                onMouseEnter={e => {
                  setState({
                    widthLine: e.target.getBoundingClientRect().width,
                    leftLinePosition: e.target.offsetLeft,
                    isVisible: true
                  });
                }}
              >
                {value.name}
              </div>
            );
          })}
        </div>
      </div>
    </Navbar>

  );
};

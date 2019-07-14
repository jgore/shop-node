import React from "react";

export default ({ categories }) => {
  const [state, setState] = React.useState({
    leftLinePosition: 0,
    isVisible: false,
    widthLine: 0
  });

  return (
    <div className="category-list">
      <div
        className="category-container"
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
  );
};

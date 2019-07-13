import React from "react";
import Axios from "axios";

class ProductPage extends React.Component {
  state = {
    product: {}
  };

  componentDidMount = () => {
    console.log(this.props.match);
    Axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/`
    });
  };
  render = () => {
    return <div>asd</div>;
  };
}

export default ProductPage;

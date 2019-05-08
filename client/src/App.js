import React, { Component } from "react";
import './App.css';
import Axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    Axios(`/api/message`)
      .then(res => {
        this.setState({
          messages: res.data || false,
          error: null
        });
      })
      .catch(err => {
        if (err.response) {
          this.setState({
            error: err.response.status
          });
        } else {
          this.setState({
            error: 500
          });
        }
      })
      .finally(() => {
        this.setState({
          isLoading: false
        });
      });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.messages.map((message, index) => (
            <div>
              <p>title : {message.title}</p>
              <p>text : {message.text}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App;

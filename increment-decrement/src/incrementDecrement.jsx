import React, { Component, ReactPropTypes } from "react";

class IncrementDecrement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.clickIncrement = this.clickIncrement.bind(this);
    this.clickDecrement = this.clickDecrement.bind(this);
  }

  render() {
    return (
      <div>
        <h1>count: {this.state.count}</h1>
        <button onClick={this.clickIncrement}>Increment</button>
        <button onClick={this.clickDecrement}>Decrement</button>
      </div>
    );
  }

  clickIncrement() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  clickDecrement() {
    if (this.state.count <= 0) {
      alert("cannot be less than 0");
    } else {
      this.setState({
        count: this.state.count - 1,
      });
    }
  }
}

export default IncrementDecrement;

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };

    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
  }

  plus() {
    this.setState({ count: this.state.count + 1 });
  }
  minus() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <button onClick={this.plus}>Плюс</button>
        <button onClick={this.minus}>Минус</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default App;

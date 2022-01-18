import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Плюс
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Минус
        </button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default App;

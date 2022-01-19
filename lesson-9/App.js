import React, { Component } from "react";
import { Posts } from "./components/Posts";

class App extends Component {
  state = {
    posts: [
      { id: 1, name: "React" },
      { id: 2, name: "Vue" },
      { id: 3, name: "Angular" },
    ],
  };

  handleSomething = () => {
    console.log("Hello from App");
  };

  render() {
    const { posts } = this.state; // Деструктуризация

    return (
      <div style={{ textAlign: "center" }}>
        <Posts posts={posts} console={this.handleSomething} />
      </div>
    );
  }
}

export default App;

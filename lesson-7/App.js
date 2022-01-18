import React, { Component } from "react";

class App extends Component {
  state = {
    posts: [
      { id: 1, name: "React" },
      { id: 2, name: "Vue" },
      { id: 3, name: "Angular" },
    ],
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        {this.state.posts.map((post) => (
          <h1 key={post.id}>{post.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;

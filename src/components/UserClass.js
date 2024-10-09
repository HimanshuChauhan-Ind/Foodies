import React from "react";

class UserClass extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    const { name } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click Me
        </button>
        <button
          onClick={() => {
            this.setState({ count: 0 });
          }}
        >
          Revert
        </button>
        <h3>Count: {count}</h3>
        <h2>Name: {name} (Class)</h2>
        <h2>Location: Ghaziabad</h2>
        <h2>Git: @HimanshuChauhan-Ind</h2>
        <h2>Email: him97cha@gmail.com</h2>
      </div>
    );
  }
}

export default UserClass;

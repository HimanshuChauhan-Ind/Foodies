import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="user-card">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Revert
      </button>
      <h3>Count:{count}</h3>
      <h2>Name: {name}(Function)</h2>
      <h2>Location: Ghaziabad</h2>
      <h2>Git: @HimanshuChauhan-Ind</h2>
      <h2>Email: him97cha@gmail.com</h2>
    </div>
  );
};

export default User;

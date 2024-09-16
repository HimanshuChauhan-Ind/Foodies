import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/components/Navbar";
import ResCard from "./src/components/ResCard";
import Body from "./src/components/Body";

const App = () => (
  <div className="App">
    <Navbar />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/components/Navbar";
import ResCard from "./src/components/ResCard";
import Body from "./src/components/Body";
import Error from "./src/components/Error";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => (
  <div className="App">
    <Navbar />
    <Body />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

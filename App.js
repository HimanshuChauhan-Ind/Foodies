import React from "react";
import ReactDOM from "react-dom/client";

// Navigation Components
const Logo = () => (
  <img
    className="appLogo"
    alt="app logo"
    src="https://img.freepik.com/premium-photo/man-scooter-with-basket-vegetables_1142157-52262.jpg?w=1380"
  />
);

const NavItems = () => (
  <ul className="navList">
    <li>Home</li>
    <li>About Us</li>
    <li>Orders</li>
    <li>Cart</li>
  </ul>
);

const Navbar = () => (
  <div className="navBar">
    <Logo />
    <NavItems />
  </div>
);

// Body Components
const Search = () => <div className="search">Search</div>;

const ResCard = () => (
  <div className="resCard">
    <img
      alt="Restaurant Logo"
      className="resLogo"
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
    />
    <h2>Restaurant Name</h2>
    <h3>Cuisines</h3>
    <h3>Rating</h3>
    <h3>Time</h3>
  </div>
);

const Restaurants = () => (
  <div className="resList">
    <ResCard />
    <ResCard />
    <ResCard />
    <ResCard />
    <ResCard />
    <ResCard />
    <ResCard />
    <ResCard />
    <ResCard />
    <ResCard />
  </div>
);

const Body = () => (
  <div className="body">
    <Search />
    <Restaurants />
  </div>
);

const App = () => (
  <div className="App">
    <Navbar />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

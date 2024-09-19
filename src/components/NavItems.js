import { Link } from "react-router-dom";

const NavItems = () => (
  <ul className="navList">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About Us</Link>
    </li>
    <li>
      <Link to="/contact">Contact Us</Link>
    </li>
    <li>Cart</li>
  </ul>
);

export default NavItems;

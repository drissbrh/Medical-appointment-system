import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Router>
      <nav className="navbar">
        <div className="nav__logo">
          <Link to="/">WeCare</Link>
        </div>
        <ul className="navbar__links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li className="sign__link">
            <Link to="/login">Sign In</Link>
          </li>
        </ul>
        <div className="threeLines">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </Router>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./NavBar.css";

import { logout } from "../redux/actions/userActions";

const NavBar = ({ click }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  return (
    <>
      <nav className="navbar">
        <div className="nav__logo">
          <Link to="/">WeCare</Link>
        </div>
        <ul className="navbar__links">
          <li>
            <Link to="/about">About Us</Link>
          </li>
          {userInfo ? (
            <div className="navbar__links">
              <li>
                <Link to="/profile">
                  {userInfo.name.split(" ")[0].toUpperCase()}
                </Link>
              </li>
              <li onClick={() => dispatch(logout())}>
                <Link to="/profile">Logout</Link>
              </li>
            </div>
          ) : (
            <li className="sign__link">
              <Link to="/login">Sign In</Link>
            </li>
          )}
        </ul>
        <div className="threeLines" onClick={click}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

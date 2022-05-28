import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./NavBar.css";
import { loginAdmin } from "../redux/actions/adminActions";
import { logout } from "../redux/actions/patientActions";

const NavBar = ({ click }) => {
  const doctorLogin = useSelector((state) => state.doctorLogin);

  const patientLogin = useSelector((state) => state.patientLogin);

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
          {patientLogin.userInfo ? (
            <div className="navbar__links">
              <li>
                <Link to="/profile">
                  {patientLogin.userInfo.name.split(" ")[0].toUpperCase()}
                </Link>
              </li>
              <li onClick={() => dispatch(logout())}>
                <Link to="/profile">Logout</Link>
              </li>
            </div>
          ) : doctorLogin.userInfo ? (
            <div className="navbar__links">
              <li>
                <Link to="/profile">
                  {doctorLogin.userInfo.name.split(" ")[0].toUpperCase()}
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

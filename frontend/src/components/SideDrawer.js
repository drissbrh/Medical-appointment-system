import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./SideDrawer.css";

import { logout } from "../redux/actions/userActions";

const SideDrawer = ({ click, show }) => {
  const sideDrawerClass = ["sidedrawer"];
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  if (show) {
    sideDrawerClass.push("show");
  }
  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        {userInfo ? (
          <>
            <li>
              <Link to="/profile">
                {userInfo.name.split(" ")[0].toUpperCase()}
              </Link>
            </li>
            <li onClick={() => dispatch(logout())}>
              <Link to="/profile">Logout</Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Sign In</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SideDrawer;

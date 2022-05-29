import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./NavBar.css";
import { logoutAdmin } from "../redux/actions/adminActions";
import { logoutPatient } from "../redux/actions/patientActions";
import { logoutDoctor } from "../redux/actions/doctorActions";

const NavBar = ({ click }) => {
  //Doctor
  const doctorLogin = useSelector((state) => state.doctorLogin);
  const { doctorInfo } = doctorLogin;
  //Patient
  const patientLogin = useSelector((state) => state.patientLogin);
  const { patientInfo } = patientLogin;
  //Admin
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

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
          {patientInfo ? (
            <div className="navbar__links">
              <li>
                <Link to="/profile/patient">
                  {patientInfo.name.split(" ")[0].toUpperCase()}
                </Link>
              </li>
              <li onClick={() => dispatch(logoutPatient())}>Logout</li>
            </div>
          ) : doctorInfo ? (
            <div className="navbar__links">
              <li>
                <Link to="/profile/doctor">
                  {doctorInfo.name.split(" ")[0].toUpperCase()}
                </Link>
              </li>
              <li onClick={() => dispatch(logoutDoctor())}>Logout</li>
            </div>
          ) : adminInfo ? (
            <div className="navbar__links">
              <li>
                <Link to="/path/admin/dash">
                  {adminInfo.name.split(" ")[0].toUpperCase()}
                </Link>
              </li>
              <li onClick={() => dispatch(logoutAdmin())}>Logout</li>
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

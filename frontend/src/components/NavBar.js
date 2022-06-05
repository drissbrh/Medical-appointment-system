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
  const { doctorInfo: docLog } = doctorLogin;

  const doctorRegister = useSelector((state) => state.doctorRegister);
  const { doctorInfo: docReg } = doctorRegister;
  //Patient
  const patientLogin = useSelector((state) => state.patientLogin);
  const { patientInfo: patientLog } = patientLogin;

  const patientRegister = useSelector((state) => state.patientRegister);
  const { patientInfo: patientReg } = patientRegister;
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
          {patientReg ? (
            <div className="navbar__links">
              <li>
                <Link to="/profile/patient">
                  {patientReg.name.split(" ")[0].toUpperCase()}
                </Link>
              </li>
              <li onClick={() => dispatch(logoutPatient())}>Logout</li>
            </div>
          ) : patientLog ? (
            <div className="navbar__links">
              <li>
                <Link to="/profile/patient">
                  {patientLog.name.split(" ")[0].toUpperCase()}
                </Link>
              </li>
              <li onClick={() => dispatch(logoutPatient())}>Logout</li>
            </div>
          ) : docReg ? (
            <div className="navbar__links">
              <li>
                <Link to="/profile/doctor">
                  {docReg.name.split(" ")[0].toUpperCase()}
                </Link>
              </li>
              <li onClick={() => dispatch(logoutDoctor())}>Logout</li>
            </div>
          ) : docLog ? (
            <div className="navbar__links">
              <li>
                <Link to="/profile/doctor">
                  {docLog.name.split(" ")[0].toUpperCase()}
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

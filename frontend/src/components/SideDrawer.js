import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./SideDrawer.css";
import { logoutAdmin } from "../redux/actions/adminActions";
import { logoutPatient } from "../redux/actions/patientActions";
import { logoutDoctor } from "../redux/actions/doctorActions";

const SideDrawer = ({ click, show }) => {
  const sideDrawerClass = ["sidedrawer"];
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

  if (show) {
    sideDrawerClass.push("show");
  }
  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li className="sidedrawer__links__listers">
          <Link to="/about">About Us</Link>
        </li>
        <li className="sidedrawer__links__listers">
          <Link to="/">Home</Link>
        </li>
        {patientInfo ? (
          <>
            <li className="sidedrawer__links__listers">
              <Link to="/profile/patient">
                {patientInfo.name.split(" ")[0].toUpperCase()}
              </Link>
            </li>
            <li
              onClick={() => dispatch(logoutPatient())}
              className="sidedrawer__logout"
            >
              Logout
            </li>
          </>
        ) : doctorInfo ? (
          <>
            <li className="sidedrawer__links__listers">
              <Link to="/profile/doctor">
                {doctorInfo.name.split(" ")[0].toUpperCase()}
              </Link>
            </li>
            <li
              onClick={() => dispatch(logoutDoctor())}
              className="sidedrawer__logout"
            >
              Logout
            </li>
          </>
        ) : adminInfo ? (
          <>
            <li className="sidedrawer__links__listers">
              <Link to="/path/admin/dash">
                {adminInfo.name.split(" ")[0].toUpperCase()}
              </Link>
            </li>
            <li
              className="sidedrawer__logout"
              onClick={() => dispatch(logoutPatient())}
            >
              Logout
            </li>
          </>
        ) : (
          <li className="sidedrawer__links__listers">
            <Link to="/login">Sign In</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SideDrawer;

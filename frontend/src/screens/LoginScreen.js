import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./LoginScreen.css";
import { loginPatient } from "../redux/actions/patientActions";
import { loginDoctor } from "../redux/actions/doctorActions";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const patientLogin = useSelector((state) => state.patientLogin);
  const { patLoading, patError, patientInfo } = patientLogin;

  //
  const doctorLogin = useSelector((state) => state.doctorLogin);
  const { docLoading, docError, doctorInfo } = doctorLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (doctorInfo || patientInfo) {
      navigate(redirect);
    }
  }, [navigate, doctorInfo, patientInfo, redirect]);
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch(loginDoctor(email, password));
    dispatch(loginPatient(email, password));
  };

  return (
    <div className="loginscreen">
      <h1 className="login__header">Sign In</h1>
      {docError ? (
        <p className="signIn__error">{docError}</p>
      ) : patError ? (
        <p className="signIn__error">{patError}</p>
      ) : (
        <></>
      )}
      {docLoading ? (
        <div className="spinner2"></div>
      ) : patLoading ? (
        <div className="spinner2"></div>
      ) : (
        <></>
      )}
      <form onSubmit={handleSubmit} className="form__elements">
        <div className="username__section">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your username"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="username__section">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <p className="login__link">
          New to the platfrom ?{"  "}
          <Link to="/register">Register</Link>
        </p>
        <button type="submit" className="register__btn">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;

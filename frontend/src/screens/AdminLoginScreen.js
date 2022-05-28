import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./AdminLoginScreen.css";

import { loginAdmin } from "../redux/actions/adminActions";

const AdminLoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminLoading, adminError, userInfo } = adminLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAdmin(email, password));
  };

  return (
    <div className="adminloginscreen">
      <h1 className="login__header">Sign In As Admin</h1>
      {adminError && <p className="signIn__error">{adminError}</p>}
      {adminLoading && <div className="spinner2"></div>}
      <form onSubmit={handleSubmit} className="admin__form__elements">
        <div className="admin__section">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="admin__section">
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

        <button type="submit" className="admin__login__btn">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default AdminLoginScreen;

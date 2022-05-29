import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { registerPatient } from "../redux/actions/patientActions";
import { registerDoctor } from "../redux/actions/doctorActions";
import "./RegisterScreen.css";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [toggle, setToggle] = useState(false);
  const [message, setMessage] = useState(null);

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  const dispatch = useDispatch();
  const doctorRegister = useSelector((state) => state.doctorRegister);
  const { doctorInfo, docError } = doctorRegister;
  const patientRegister = useSelector((state) => state.patientRegister);
  const { patientInfo, patError } = patientRegister;

  const location = useLocation();
  const navigate = useNavigate();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (doctorInfo || patientInfo) {
      navigate(redirect);
    }
  }, [navigate, doctorInfo, patientInfo, redirect]);
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!toggle) {
      if (confirmPassword !== password) {
        setMessage("Password does not match");
      } else {
        dispatch(registerPatient(name, email, password));
      }
    } else {
      if (confirmPassword !== password) {
        setMessage("Password does not match");
      } else {
        dispatch(
          registerDoctor(
            name,
            email,
            password,
            address,
            city,
            phoneNumber,
            speciality
          )
        );
      }
    }
  };

  return (
    <div className="registerscreen">
      <h1 className="register__header">Register</h1>
      {(docError && <p className="signIn__error">{docError}</p>) ||
        (patError && <p className="signIn__error">{patError}</p>)}

      {message && <p className="signIn__error">{message}</p>}
      {(doctorRegister.loading && <div className="spinner2"></div>) ||
        (patientRegister.loading && <div className="spinner2"></div>)}
      <form onSubmit={handleSubmit} className="form__elements1">
        <div className="switch__section">
          <div className="patient__doctor">
            <i className="fa-solid fa-bed"></i>
            <p>Patient</p>
          </div>

          <label className="switch">
            <input type="checkbox" checked={toggle} onClick={toggler} />
            <span className="slider round"></span>
          </label>
          <div className="patient__doctor">
            <p>Doctor</p>
            <i className="fa-solid fa-user-doctor"></i>
          </div>
        </div>
        <div className="username__section1">
          <label>Name</label>
          <input
            type="name"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <div className="username__section1">
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
        </div>
        <div className="username__section1">
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
        <div className="username__section1">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Repeat your password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        {toggle && (
          <>
            <div className="username__section1">
              <label>Address</label>
              <input
                type="name"
                placeholder="Add your address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div className="username__section1">
              <label>city</label>
              <input
                type="name"
                placeholder="Add your city"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </div>
            <div className="username__section1">
              <label>Phone Number</label>
              <input
                type="name"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                maxLength="10"
              />
            </div>
            <div className="username__section1">
              <label>Speciality</label>
              <select
                value={speciality}
                className="spec__select"
                onChange={(e) => setSpeciality(e.target.value)}
              >
                <option value={"speciality"}>Allergy and Immunology</option>
                <option value={"Anesthesiology"}>Anesthesiology</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
              </select>
            </div>
          </>
        )}
        <p className="register__link">
          Already have an account ?{"  "}
          <Link to="/login">Sign In</Link>
        </p>
        <button type="submit" className="register__btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterScreen;

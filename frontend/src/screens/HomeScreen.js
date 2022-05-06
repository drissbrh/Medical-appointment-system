import React from "react";
import "./HomeScreen.css";
import { useNavigate } from "react-router-dom";

//Assets
import doctor from "../assets/doctor.jpg";
import search from "../assets/search.png";
import bulb from "../assets/bulb.png";
import schedule from "../assets/schedule.png";
import doctorPng from "../assets/doctor.png";

const HomeScreen = () => {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/search");
  };
  return (
    <div className="homescreen_container">
      <div className="homescreen">
        <div className="homescreen__header">
          <div className="headline">
            <p>
              Find local specialities
              <br />
              who can take your insurance 🚀
            </p>
            <p>
              We can help you find available vaccine appointments
              <br />
              near you or notify you when availability opens up.
            </p>
            <div className="homescreen__input">
              <input placeholder="🩺 condition,treatement" type="text" />
              <div onClick={handleSearch}>
                <i className="fa-solid fa-magnifying-glass search__icon"></i>
              </div>
            </div>
          </div>
          <div className="doc__image">
            <img src={doctor} alt="doctor__image" />
          </div>
        </div>
        <div className="homescreen__body">
          <p>Fastest solution</p>
          <h2>4 easy steps to get your solution</h2>
          <div className="foursteps">
            <span className="step1">
              <img src={search} alt="step1" />
              <h3>Search doctor</h3>
              <p>
                We're here to help whenever you
                <br /> feel ill, but keeping you healthy
                <br />
                is our better priority
              </p>
            </span>
            <span className="step1">
              <img src={doctorPng} alt="step1" />
              <h3>Check doctor profile</h3>
              <p>
                We can help you find available
                <br />
                vaccine appointments near you or
                <br />
                notify you when availability.
              </p>
            </span>
            <span className="step1">
              <img src={schedule} alt="step1" />
              <h3>Schedule Appointment</h3>
              <p>
                From seasonal allergies to burn
                <br /> identification and treatements,
                <br />
                we have the ressources.
              </p>
            </span>
            <span className="step1">
              <img src={bulb} alt="step1" />

              <h3>Get your solution</h3>
              <p>
                We're here to help whenever you
                <br /> feel ill, but keeping you healthy
                <br />
                is our better priority.
              </p>
            </span>
          </div>
        </div>
        <footer className="homescreen__footer">
          <p> &copy;2022-2005 WeCare Medical Agency</p>
        </footer>
      </div>
    </div>
  );
};

export default HomeScreen;

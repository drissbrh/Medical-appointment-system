import React from "react";
import "./DoctorCard.css";
import doctor_page from "../assets/doctor_page.jpg";
import Rating from "./Rating";

const DoctorCard = ({ name, city, address, phone, spec }) => {
  return (
    <div className="doctorcard">
      <div className="card__left">
        <img src={doctor_page} alt="doctor_image" />
        <h2>{name}</h2>
        <Rating value={5} />
      </div>
      <div className="card__right">
        <div className="info__section">
          <h2>About this doctor</h2>
          <p></p>
        </div>
        <div className="info__section">
          <h2>Speciality</h2>
          <p>{spec}</p>
        </div>
        <div className="info__section">
          <h2>Ville</h2>
          <p>{city}</p>
        </div>
        <div className="info__section">
          <h2>Address</h2>
          <p>{city}</p>
        </div>
        <div className="info__section">
          <h2>Phone Number</h2>
          <p className="phone">{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;

import React from "react";
import "./SearchItem.css";
import doctor1 from "../assets/doctor_page.jpg";
import { Link } from "react-router-dom";

const SearchItem = ({ name, city, phone, address, spec, identity }) => {
  return (
    <div className="searchitem">
      <img src={doctor1} alt="doctor_image" />
      <div className="doc__infos">
        <div className="doc__name">
          <i className="fa-solid fa-signature"></i>
          <h3>{name}</h3>
        </div>
        <div className="doc__city">
          <i className="fa-solid fa-city"></i>
          <p>{city}</p>
        </div>
        <div className="doc__phone">
          <i className="fa-solid fa-phone"></i>
          <p>{phone}</p>
        </div>
        <div className="doc__address">
          <i className="fa-solid fa-location-dot"></i>
          <p>{address}</p>
        </div>

        <div className="doc__available">
          <div>
            <i className="fa-solid fa-stethoscope"></i>
            <p>{spec}</p>
          </div>

          <button>
            <Link to={`/appointment/${identity}`}>See Availability</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;

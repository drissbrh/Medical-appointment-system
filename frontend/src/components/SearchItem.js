import React from "react";
import "./SearchItem.css";
import doctor1 from "../assets/doctor_page.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const SearchItem = ({ key1, name, city, phone, address, spec, identity }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const patientLogin = useSelector((state) => state.patientLogin);
  const { patientInfo } = patientLogin;

  return (
    <div className="searchitem" key={key1}>
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
          {patientInfo && (
            <button>
              <Link to={`/doctor/${identity}`}>See Availability</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchItem;

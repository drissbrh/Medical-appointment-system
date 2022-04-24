import React from "react";
import "./HomeScreen.css";
import doctor from "./doctor.jpg";

const HomeScreen = () => {
  return (
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
          <input placeholder="🩺 condition,treatement" type="text" />
        </div>
        <div className="doc__image">
          <img src={doctor} alt="doctor__image" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

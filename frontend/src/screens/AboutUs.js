import React from "react";
import "./AboutUs.css";
import color1 from "../assets/doctorpatient.jpg";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="inside__aboutus">
        <div className="One__section">
          <div className="for__image">
            <img src={color1} />
          </div>
          <div className="for__Text">
            <p>djfhfjhfsjdfhjdkfhdkfhdklhfsdlfhds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

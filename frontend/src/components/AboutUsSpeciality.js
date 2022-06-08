import React from "react";
import "./AboutUsSpeciality.css";

const AboutUsSpeciality = ({ image, text }) => {
  return (
    <div className="one__spec">
      <img src={image} alt="image" />
      <h3>{text}</h3>
      <p></p>
    </div>
  );
};

export default AboutUsSpeciality;

import React from "react";
import "./AboutUsThree.css";

import { Link } from "react-router-dom";

const AboutUsThree = ({ picture1, picture2, picture3, picture4 }) => {
  return (
    <div className="aboutusthree">
      <div className="aboutusthree__images">
        <img src={picture1} alt="photo1" />
        <img src={picture3} alt="photo3" />
        <img src={picture2} alt="photo2" />

        <img src={picture4} alt="photo4" />
      </div>
      <div className="forText__three">
        <h5>About Us</h5>
        <h2>Our Stellar Values</h2>
        <p>
          The cornerstone of our establishement is 'Making the benefits of
          exceptional medical services reach the people without any
          discrimination. We strive to live up to this philosophy through our
          stallar values
        </p>
        <Link to="/search">Go right at it!</Link>
      </div>
    </div>
  );
};

export default AboutUsThree;

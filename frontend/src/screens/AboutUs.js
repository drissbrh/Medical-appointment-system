import React from "react";
import "./AboutUs.css";

//Assets
import hands from "../assets/hands.jpg";
import cardiology from "../assets/cardiology.png";
import dentistry from "../assets/dentistry.png";
import brain from "../assets/brain.png";
import skin from "../assets/skin.png";
import emergency from "../assets/emergency.png";
import disabled from "../assets/disabled.png";
import opthalmologist from "../assets/opthalmologist.png";
import rehabilitation from "../assets/rehabilitation.png";
import surgery from "../assets/surgery.png";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";

import AboutUsSpeciality from "../components/AboutUsSpeciality";
import AboutUsThree from "../components/AboutUsThree";
import AboutUsFeedback from "../components/AboutUsFeedback";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="inside__aboutus">
        <div className="One__section">
          <div className="for__image">
            <img src={hands} />
          </div>
          <div className="for__Text">
            <h5>About Us</h5>
            <h2>
              First-class Booking
              <br />
              Platform
            </h2>
            <p>
              Being in the healthcare sector, we consider it our paradigm duty
            </p>
          </div>
        </div>
        <div className="two__section">
          <div className="two__section__upper">
            <h2>Our Speciality</h2>
            <p>
              We provde the world class services with the
              <br />
              best medical team
            </p>
          </div>
          <div className="specialities">
            <AboutUsSpeciality image={dentistry} text={"Dentistry"} />
            <AboutUsSpeciality image={cardiology} text={"Cardiology"} />
            <AboutUsSpeciality image={brain} text={"Neurology"} />
            <AboutUsSpeciality image={skin} text={"Dermatology"} />
            <AboutUsSpeciality image={emergency} text={"Emergency medicine"} />
            <AboutUsSpeciality image={disabled} text={"Psychiatry"} />
            <AboutUsSpeciality image={opthalmologist} text={"Opthalmology"} />
            <AboutUsSpeciality
              image={rehabilitation}
              text={"Physical Rehabilitation"}
            />
            <AboutUsSpeciality image={surgery} text={"Surgery"} />
          </div>
        </div>
        <div className="three__section">
          <AboutUsThree
            picture1={photo1}
            picture2={photo2}
            picture3={photo3}
            picture4={photo4}
          />
        </div>
        <div className="">
          <AboutUsFeedback />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import React from "react";
import "./AboutUsFeedback.css";

import photo4 from "../assets/photo4.jpg";
import patient11 from "../assets/patient11.jpg";
import patient12 from "../assets/patient12.jpg";
import patient13 from "../assets/patient13.jpg";

const AboutUsFeedback = () => {
  return (
    <div className="aboutusfeedback">
      <h1>
        Read feedback about our
        <br />
        services and wonderful team!
      </h1>
      <h5>
        We take of our patients just like a family
        <br />
        member. Read the testimonials from our patients.
      </h5>
      <div className="testimonials">
        {/* One */}
        <div className="one__testimonial">
          <div className="testimonial__header">
            <h3>""</h3>
            <p>Amazing services and Platform.Cheers to the team behind this</p>
          </div>
          <div className="testimonial__person">
            <img src={photo4} />
            <section>
              <h3>Ahmed</h3>
              <p>Doctor</p>
            </section>
          </div>
        </div>

        {/* Two */}
        <div className="one__testimonial">
          <div className="testimonial__header">
            <h3>""</h3>
            <p>Made my life much easier</p>
          </div>
          <div className="testimonial__person">
            <img src={patient11} />
            <section>
              <h3>Shahin</h3>
              <p>Patient</p>
            </section>
          </div>
        </div>
        {/* Three */}
        <div className="one__testimonial">
          <div className="testimonial__header">
            <h3>""</h3>
            <p>
              I literally didn't need to move anywhere in order to book an
              appointment
            </p>
          </div>
          <div className="testimonial__person">
            <img src={patient12} />
            <section>
              <h3>Anwar</h3>
              <p>Patient</p>
            </section>
          </div>
        </div>

        {/* Four */}
        <div className="one__testimonial">
          <div className="testimonial__header">
            <h3>""</h3>
            <p>
              I really appreciate the work behind the scenes of this Platform
            </p>
          </div>
          <div className="testimonial__person">
            <img src={patient13} />
            <section>
              <h3>Matilda</h3>
              <p>Patient</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsFeedback;

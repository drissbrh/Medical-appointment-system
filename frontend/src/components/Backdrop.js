import React from "react";
import "./Backdrop.css";

const Backdrop = ({ click, show }) => {
  return (
    show && (
      <div className="backdrop" onClick={click}>
        Backdrop
      </div>
    )
  );
};

export default Backdrop;

import React from "react";
import "./RendezVous.css";

const RendezVous = () => {
  return (
    <div className="appoint__inputs">
      <input type="date" />
      <div>
        <span className="morning">
          <p>Morning</p>
          <div className="hours__inputs">
            <input type="radio" name="8" />
            <label>8-9</label>
          </div>
          <div className="hours__inputs">
            <input type="radio" name="8" />
            <label>9-10</label>
          </div>
          <div className="hours__inputs">
            <input type="radio" name="8" />
            <label>10-11</label>
          </div>
          <div className="hours__inputs">
            <input type="radio" name="8" />
            <label>11-12</label>
          </div>
        </span>
        <span className="morning">
          <p>Afternoon</p>
          <div className="hours__inputs">
            <input type="radio" name="8" />
            <label>14-15</label>
          </div>
          <div className="hours__inputs">
            <input type="radio" name="8" />
            <label>15-16</label>
          </div>
          <div className="hours__inputs">
            <input type="radio" name="8" />
            <label>16-17</label>
          </div>
          <div className="hours__inputs">
            <input type="radio" name="8" />
            <label>17-18</label>
          </div>
        </span>
      </div>
    </div>
  );
};

export default RendezVous;

import React from "react";
import { Link } from "react-router-dom";

const PatientRow = ({
  identify,
  click,
  clickDelete,
  doctor,
  startingHour,
  bookingDate,
}) => {
  return (
    <tr>
      <td>{doctor}</td>
      <td>{startingHour}H00</td>
      <td>{bookingDate}</td>

      <td>
        <Link to={`/appointment/update/${identify}`}>
          <i className="fa-solid fa-wrench" onClick={click}></i>
        </Link>
      </td>
      <td>
        <i className="fa-solid fa-trash" onClick={clickDelete}></i>
      </td>
    </tr>
  );
};

export default PatientRow;

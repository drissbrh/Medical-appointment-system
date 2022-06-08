import React from "react";
import "./AdminRow.css";

const AdminRow = ({
  patient,
  doctor,
  hour,
  day,
  createdAt,
  ID,
  clickDeleteAppt,
}) => {
  return (
    <tr>
      {patient ? (
        <td>{patient.name}</td>
      ) : (
        <td>
          <b>User probably deleted</b>
        </td>
      )}
      {doctor ? (
        <td>{doctor.name}</td>
      ) : (
        <td>
          <b>User probably deleted</b>
        </td>
      )}
      <td>{hour}h00</td>
      <td>{day}</td>
      <td>{createdAt}</td>
      <td>
        <i
          className="fa-solid fa-trash"
          onClick={() => clickDeleteAppt(ID)}
        ></i>
      </td>
    </tr>
  );
};

export default AdminRow;

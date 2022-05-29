import React from "react";
import "./AdminRow.css";

const AdminRow = ({
  patient,
  doctor,
  hour,
  day,
  createdAt,
  click,
  clickDelete,
}) => {
  return (
    <tr>
      <td>{patient}</td>
      <td>{doctor}</td>
      <td>{hour}h00</td>
      <td>{day}</td>
      <td>{createdAt}</td>
      <td>
        <i className="fa-solid fa-trash" onClick={clickDelete}></i>
      </td>
    </tr>
  );
};

export default AdminRow;

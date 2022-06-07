import React from "react";

const DoctorRow = ({ patientId, hour, day }) => {
  return (
    <tr>
      {patientId ? (
        <td>{patientId.name}</td>
      ) : (
        <td>
          <b>User probably deleted</b>
        </td>
      )}
      <td>{hour}H00</td>
      <td>{day}</td>
    </tr>
  );
};

export default DoctorRow;

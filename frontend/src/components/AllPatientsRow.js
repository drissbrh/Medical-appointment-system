import React from "react";

const AllPatientsRow = ({ ID, name, email, createdAt, clickDelete }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{createdAt}</td>
      <td>
        <i className="fa-solid fa-trash" onClick={() => clickDelete(ID)}></i>
      </td>
    </tr>
  );
};

export default AllPatientsRow;

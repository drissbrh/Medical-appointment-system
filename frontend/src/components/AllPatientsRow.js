import React from "react";

const AllPatientsRow = ({ name, email, createdAt, click, clickDelete }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{createdAt}</td>
      <td>
        <i className="fa-solid fa-trash" onClick={clickDelete}></i>
      </td>
    </tr>
  );
};

export default AllPatientsRow;

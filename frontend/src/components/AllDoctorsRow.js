import React from "react";

const AllDoctorsRow = ({
  ID,
  name,
  email,
  createdAt,
  phone,
  city,
  address,
  speciality,
  clickDelete,
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{city}</td>
      <td>{address}</td>
      <td>{speciality}</td>
      <td>{createdAt}</td>
      <td>
        <i className="fa-solid fa-trash" onClick={() => clickDelete(ID)}></i>
      </td>
    </tr>
  );
};

export default AllDoctorsRow;

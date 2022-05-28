import React from "react";

const DoctorRow = ({ click, clickDelete }) => {
  return (
    <tr>
      <td>doc</td>
      <td>0678459823</td>
      <td>17h</td>
      <td>2020-15-26</td>
      <td>Agadir</td>
      <td>Hay albjert n3am asidid orilli</td>
      <td>
        <i className="fa-solid fa-wrench" onClick={click}></i>
      </td>
      <td>
        <i className="fa-solid fa-trash" onClick={clickDelete}></i>
      </td>
    </tr>
  );
};

export default DoctorRow;

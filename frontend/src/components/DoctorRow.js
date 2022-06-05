import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListPatientDetails } from "../redux/actions/patientActions";

const DoctorRow = ({ click, clickDelete, patientId, hour, day }) => {
  const dispatch = useDispatch();
  const patientDetails = useSelector((state) => state.patientDetails);
  const { patient } = patientDetails;
  useEffect(() => {
    dispatch(ListPatientDetails(patientId));
  }, [dispatch, patientId]);
  return (
    <tr>
      <td>{patientId}</td>
      <td>{hour}H00</td>
      <td>{day}</td>
      <td>
        <i className="fa-solid fa-trash" onClick={clickDelete}></i>
      </td>
    </tr>
  );
};

export default DoctorRow;

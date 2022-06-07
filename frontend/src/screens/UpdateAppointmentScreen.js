import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAppointmentDetails,
  UpdateAppointment,
} from "../redux/actions/appointmentActions";
import { useNavigate, useParams } from "react-router-dom";

import doc1 from "../assets/doc1.jpg";
import patientPic from "../assets/patient.png";
import refresh from "../assets/refresh (1).png";

import { ListDoctorDetails } from "../redux/actions/doctorActions";

import "./UpdateAppointmentScreen.css";
import { ListPatientDetails } from "../redux/actions/patientActions";
import { APPOINTMENT_UPDATE_RESET } from "../redux/constants/appointmentConstants";

const UpdateAppointmentScreen = () => {
  const [bookingDate, setBookingDate] = useState();
  const [startingHour, setStartingHour] = useState();
  const navigate = useNavigate();

  const doctorDetails = useSelector((state) => state.doctorDetails);
  const { doctor } = doctorDetails;

  const patientDetails = useSelector((state) => state.patientDetails);
  const { patient } = patientDetails;

  //
  const patientLogin = useSelector((state) => state.patientLogin);
  const { patientInfo } = patientLogin;

  const appointmentUpdate = useSelector((state) => state.appointmentUpdate);
  const { updateApptSuccess, appUpdateError } = appointmentUpdate;

  const appointmentDetails = useSelector((state) => state.appointmentDetails);
  const { appointment } = appointmentDetails;

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (appointment && id !== appointment._id) {
      dispatch(getAppointmentDetails(id));
    }
    dispatch(ListPatientDetails(patientInfo._id));
    dispatch(ListDoctorDetails(appointment.doctor));
    if (updateApptSuccess) {
      navigate(`/profile/patient`);
      dispatch({
        type: APPOINTMENT_UPDATE_RESET,
      });
    }
  }, [dispatch, id, navigate, appointment, updateApptSuccess, patientInfo]);

  const handleClick = () => {
    dispatch(UpdateAppointment(appointment._id, { startingHour, bookingDate }));
  };

  const HandleDate = (e) => {
    e.preventDefault();
    setBookingDate(e.target.value);
  };

  const hourHandler = (e) => {
    setStartingHour(e.target.value);
  };

  return (
    <div className="updateappointmentscreen">
      <div className="updateScreen__inside">
        <h1>
          Update Appointment <img src={refresh} alt="refresh_icon" />
        </h1>

        <p>Your appointment is ready to be updated!</p>
        {doctor && patient && (
          <>
            <div className="appt__update__details">
              <div className="appt__in__details">
                <div className="patient_update_details">
                  <img src={patientPic} alt="patient" />
                  <h3>{patient.name}</h3>
                </div>
                <div className="doctor_update_details">
                  <img src={doc1} alt="doc" />
                  <h3>{doctor.name}</h3>
                  <div>
                    <p>
                      <span>Phone Number</span>: {doctor.phoneNumber}
                    </p>
                    <p>
                      <span>Speciality</span>: {doctor.speciality}
                    </p>
                    <p>
                      <span>address</span>: {doctor.address}
                    </p>
                    <p>
                      <span>City</span>: {doctor.city}
                    </p>
                  </div>
                </div>
              </div>
              <div className="appointment__update__Details">
                <div>
                  <p>
                    <span>Starting Hour</span>:{"  "}
                    {appointment.startingHour}h00
                  </p>
                </div>
                <div>
                  <p>
                    <span>Date</span>: {appointment.bookingDate}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="appoint__inputs">
          <input type="date" onChange={HandleDate} />
          <div>
            <span className="morning1">
              <p>Morning</p>
              <div className="hours__inputs">
                <input
                  type="radio"
                  name="startingHour"
                  value="8"
                  onChange={hourHandler}
                />
                <label>8-9</label>
              </div>
              <div className="hours__inputs">
                <input
                  type="radio"
                  name="startingHour"
                  value="9"
                  onChange={hourHandler}
                />
                <label>9-10</label>
              </div>
              <div className="hours__inputs">
                <input
                  type="radio"
                  name="startingHour"
                  value="10"
                  onChange={hourHandler}
                />
                <label>10-11</label>
              </div>
              <div className="hours__inputs">
                <input
                  type="radio"
                  name="startingHour"
                  value="11"
                  onChange={hourHandler}
                />
                <label>11-12</label>
              </div>
            </span>
            <span className="morning1">
              <p>Afternoon</p>
              <div className="hours__inputs">
                <input
                  type="radio"
                  name="startingHour"
                  value="14"
                  onChange={hourHandler}
                />
                <label>14-15</label>
              </div>
              <div className="hours__inputs">
                <input
                  type="radio"
                  name="startingHour"
                  value="15"
                  onChange={hourHandler}
                />
                <label>15-16</label>
              </div>
              <div className="hours__inputs">
                <input
                  type="radio"
                  name="startingHour"
                  value="16"
                  onChange={hourHandler}
                />
                <label>16-17</label>
              </div>
              <div className="hours__inputs">
                <input
                  type="radio"
                  name="startingHour"
                  value="17"
                  onChange={hourHandler}
                />
                <label>17-18</label>
              </div>
            </span>
          </div>
        </div>
        {appUpdateError && <h4 className="appt__error">{appUpdateError}</h4>}

        <button type="button" className="modify__" onClick={handleClick}>
          Update my appointment
        </button>
      </div>
    </div>
  );
};

export default UpdateAppointmentScreen;

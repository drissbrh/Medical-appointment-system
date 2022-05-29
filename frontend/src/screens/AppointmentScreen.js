import React, { useEffect, useState } from "react";
import "./AppointmentScreen.css";
import { useNavigate, useParams } from "react-router-dom";
import DoctorCard from "../components/DoctorCard";

import { useDispatch, useSelector } from "react-redux";
import { ListDoctorDetails } from "../redux/actions/doctorActions";
import { createAppts } from "../redux/actions/appointmentActions";
import { APPOINTMENT_CREATE_RESET } from "../redux/constants/appointmentConstants";

const AppointmentScreen = () => {
  const [bookingDate, setBookingDate] = useState();
  const [startingHour, setStartingHour] = useState();
  const navigate = useNavigate();

  const doctorDetails = useSelector((state) => state.doctorDetails);
  const { loading, error, doctor } = doctorDetails;

  //
  const patientLogin = useSelector((state) => state.patientLogin);
  const { patientInfo } = patientLogin;

  const appointmentCreate = useSelector((state) => state.appointmentCreate);
  const { appCreateError, success, appointment } = appointmentCreate;

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (doctor && id !== doctor._id) {
      dispatch(ListDoctorDetails(id));
    }
    if (success) {
      navigate(`/appointment/${appointment._id}`);
      dispatch({
        type: APPOINTMENT_CREATE_RESET,
      });
    }
  }, [dispatch, doctor, id, navigate, appointment, success]);

  const handleClick = () => {
    dispatch(
      createAppts({
        doctor: doctor._id,
        patient: patientInfo._id,
        startingHour,
        bookingDate,
      })
    );
  };

  const HandleDate = (e) => {
    e.preventDefault();
    setBookingDate(e.target.value);
  };

  const hourHandler = (e) => {
    setStartingHour(e.target.value);
  };

  return (
    <div className="appointmentscreen">
      <div className="inside__form">
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <DoctorCard
            name={doctor.name}
            phone={doctor.phoneNumber}
            city={doctor.city}
            spec={doctor.speciality}
            address={doctor.address}
          />
        )}
        <div className="appoint__inputs">
          <input type="date" onChange={HandleDate} />
          <div>
            <span className="morning">
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
            <span className="morning">
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
        {appCreateError && <h4 className="appt__error">{appCreateError}</h4>}
        <div className="div__button">
          <button onClick={handleClick}>Make RendezVous</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentScreen;

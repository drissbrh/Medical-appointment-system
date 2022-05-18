import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAppointmentDetails } from "../redux/actions/appointmentActions";
import { useMatch, useNavigate, useParams } from "react-router-dom";

import doc1 from "../assets/doc1.jpg";
import patientPic from "../assets/patient.png";

import { ListDoctorDetails } from "../redux/actions/doctorActions";

import "./SuccessScreen.css";
import { ListPatientDetails } from "../redux/actions/patientActions";

const SuccessScreen = () => {
  const appointmentDetails = useSelector((state) => state.appointmentDetails);
  const { error, loading, appointment } = appointmentDetails;

  const doctorDetails = useSelector((state) => state.doctorDetails);
  const { doctor } = doctorDetails;

  const patientDetails = useSelector((state) => state.patientDetails);
  const { patient } = patientDetails;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (appointment && id !== appointment._id) {
      dispatch(getAppointmentDetails(id));
    }
    dispatch(ListDoctorDetails(appointment.doctor));
    dispatch(ListPatientDetails(appointment.patient));
  }, [dispatch, id, appointment]);

  return (
    <div className="successScreen">
      <div className="successScreen__inside">
        <h1>Congratulations 🎉</h1>
        <p>Your appointment is made !</p>
        {doctor && patient && (
          <>
            <div className="appt__details">
              <div className="appt__in__details">
                <div className="patient__details">
                  <img src={patientPic} alt="patient" />
                  <h3>{patient.name}</h3>
                </div>
                <div className="doctor__details">
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
              <div className="appointmentDetails">
                <div>
                  <p>
                    <span>Starting Hour</span>: {appointment.startingHour}
                  </p>
                </div>
                <div>
                  <p>
                    <span>Date</span>:{appointment.bookingDate}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
        <button type="button" className="modify__">
          Modify my appointment
        </button>
      </div>
    </div>
  );
};

export default SuccessScreen;

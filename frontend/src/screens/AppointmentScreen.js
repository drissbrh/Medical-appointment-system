import React, { useEffect } from "react";
import "./AppointmentScreen.css";
import { useMatch, useNavigate, useParams } from "react-router-dom";
import RendezVous from "../components/RendezVous";
import DoctorCard from "../components/DoctorCard";

import { useDispatch, useSelector } from "react-redux";
import { ListDoctorDetails } from "../redux/actions/doctorActions";
import { createAppts } from "../redux/actions/appointmentActions";

const AppointmentScreen = ({}) => {
  const doctorDetails = useSelector((state) => state.doctorDetails);
  const { loading, error, doctor } = doctorDetails;

  //
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const appointmentCreate = useSelector((state) => state.appointmentCreate);
  const { success, appointment } = appointmentCreate;

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (doctor && id !== doctor._id) {
      dispatch(ListDoctorDetails(id));
    }
  }, [dispatch, doctor, id]);

  let startingHour = 1;

  const handleClick = () => {
    dispatch(createAppts(doctor, userInfo, startingHour));
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
            address={doctor.phoneNumber}
          />
        )}
        <RendezVous />
        <div className="div__button">
          <button onClick={handleClick}>Make RendezVous</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentScreen;

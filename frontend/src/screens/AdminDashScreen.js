import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./AdminDashScreen.css";
import admin from "../assets/admin.png";
import {
  deleteAppointment,
  deleteAppointmentByAdmin,
  getAllAppts,
} from "../redux/actions/appointmentActions";
import {
  deleteDoctor,
  listDoctorsBycity,
} from "../redux/actions/doctorActions";

import { deletePatient, listPatients } from "../redux/actions/patientActions";

import AdminRow from "../components/AdminRow";
import AllPatientsRow from "../components/AllPatientsRow";
import AllDoctorsRow from "../components/AllDoctorsRow";

const AdminDashScreen = () => {
  const dispatch = useDispatch();

  const patientAppointments = useSelector((state) => state.patientAppointments);
  const { patientAppts } = patientAppointments;

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo, error, loading } = adminLogin;

  const AllAppointments = useSelector((state) => state.AllAppointments);
  const { allAppointments, allApptsLoading, AllApptsError } = AllAppointments;

  const patientList = useSelector((state) => state.patientList);
  const { patients, patientsListLoading } = patientList;

  const doctorList = useSelector((state) => state.doctorList);
  const { doctors } = doctorList;

  const apptDelete = useSelector((state) => state.apptDelete);
  const { success: successDeleteAppt } = apptDelete;

  const patientDelete = useSelector((state) => state.patientDelete);
  const { success: patientDeleteSuccess } = patientDelete;

  const doctorDelete = useSelector((state) => state.doctorDelete);
  const { success: doctorDeleteSuccess } = doctorDelete;

  const handleDeleteOfAppts = (id) => {
    if (window.confirm("You want to delete this appointment?")) {
      dispatch(deleteAppointmentByAdmin(id));
    }
  };

  const handleDeleteOfPatient = (id) => {
    if (window.confirm("A Patient is about to be deleted, Are you sure ?")) {
      dispatch(deletePatient(id));
    }
  };

  const handleDeleteOfDoctor = (id) => {
    if (window.confirm("A Doctor is about to be deleted, Are you sure ?")) {
      dispatch(deleteDoctor(id));
    }
  };

  useEffect(() => {
    dispatch(getAllAppts());
    dispatch(listDoctorsBycity());
    dispatch(listPatients());
  }, [
    dispatch,
    adminInfo,
    successDeleteAppt,
    patientDeleteSuccess,
    doctorDeleteSuccess,
  ]);

  return (
    <div className="admindashscreen">
      <h2>Admin Dashboard</h2>

      <div className="info__side">
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        ) : error ? (
          <h3>{error}</h3>
        ) : (
          <>
            {
              <>
                <div className="profile__details">
                  <img src={admin} alt="profile pic" />
                </div>
              </>
            }
          </>
        )}
      </div>
      <div>
        <div className="all__appts__side">
          <h2>All Appointments</h2>
          <table>
            <tr>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Hour</th>
              <th>Appointment Day</th>
              <th>Created At</th>
              <th>Delete</th>
            </tr>
            {allAppointments &&
              allAppointments.map((p) => (
                <AdminRow
                  ID={p._id}
                  clickDeleteAppt={handleDeleteOfAppts}
                  patient={p.patient}
                  doctor={p.doctor}
                  hour={p.startingHour}
                  day={p.bookingDate}
                  createdAt={p.createdAt}
                />
              ))}
          </table>
        </div>
        <div className="all__appts__side">
          <h2>All Doctors</h2>
          <table>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>City</th>
              <th>Address</th>
              <th>Speciality</th>
              <th>Created At</th>
              <th>Delete</th>
            </tr>
            {doctors &&
              doctors.map((p) => (
                <AllDoctorsRow
                  ID={p._id}
                  clickDelete={handleDeleteOfDoctor}
                  name={p.name}
                  email={p.email}
                  phone={p.phoneNumber}
                  city={p.city}
                  address={p.address}
                  speciality={p.speciality}
                  createdAt={p.createdAt}
                />
              ))}
          </table>
        </div>
        <div className="all__appts__side">
          <h2>All Patients</h2>
          <table>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Delete</th>
            </tr>
            {patients &&
              patients.map((p) => (
                <AllPatientsRow
                  ID={p._id}
                  clickDelete={handleDeleteOfPatient}
                  name={p.name}
                  email={p.email}
                  createdAt={p.createdAt}
                />
              ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashScreen;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProfileScreen.css";
import patientPic from "../assets/patient.png";
import {
  getDoctorAppts,
  getPatientAppts,
} from "../redux/actions/appointmentActions";
import { ListDoctorDetails } from "../redux/actions/doctorActions";
import DoctorRow from "../components/DoctorRow";
import { doctorLoginReducer } from "../redux/reducers/DoctorReducer";
import PatientRow from "../components/PatientRow";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [speciality, setSpeciality] = useState("");

  const dispatch = useDispatch();

  const doctorAppointments = useSelector((state) => state.doctorAppointments);
  const { doctorAppts } = doctorAppointments;

  const patientAppointments = useSelector((state) => state.patientAppointments);
  const { patientAppts } = patientAppointments;

  const patientLogin = useSelector((state) => state.patientLogin);
  const { userInfo, error, loading } = patientLogin;

  const doctorLogin = useSelector((state) => state.doctorLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleModification = () => {};

  const handleDelete = () => {};
  useEffect(() => {
    //dispatch(getDoctorAppts(userInfo._id));
    dispatch(getPatientAppts(patientLogin.userInfo._id));
    //dispatch(ListDoctorDetails(doctorAppts));
  }, [dispatch, userInfo]);

  return (
    <div className="profilescreen">
      <h2>My Info</h2>
      <form className="profile__elements" onSubmit={handleSubmit}>
        <div className="info__side">
          <h2>My personal info</h2>
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
                    <img src={patientPic} alt="profile pic" />
                    <p>{userInfo.name.split(" ")[0].toUpperCase()}</p>
                  </div>
                  <>
                    <div className="name__section">
                      <label>Name</label>
                      <input
                        type="name"
                        placeholder={userInfo.name}
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="name__section">
                      <label>Email</label>
                      <input
                        type="email"
                        placeholder={userInfo.email}
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div className="name__section">
                      <label>Password</label>
                      <input
                        type="password"
                        placeholder="Enter your new password"
                        value={newPassword}
                        onChange={(e) => {
                          setNewPassword(e.target.value);
                        }}
                      />
                    </div>
                    {doctorLogin.userInfo.isDoctor && (
                      <>
                        <div className="name__section">
                          <label>Address</label>
                          <input
                            type="text"
                            placeholder={userInfo.address}
                            value={address}
                            onChange={(e) => {
                              setAddress(e.target.value);
                            }}
                          />
                        </div>
                        <div className="name__section">
                          <label>City</label>
                          <input
                            type="text"
                            placeholder={userInfo.city}
                            value={city}
                            onChange={(e) => {
                              setCity(e.target.value);
                            }}
                          />
                        </div>
                        <div className="name__section">
                          <label>Phone Number</label>
                          <input
                            type="name"
                            placeholder="Modify my phone number"
                            value={phoneNumber}
                            maxLength={10}
                            onChange={(e) => {
                              setPhoneNumber(e.target.value);
                            }}
                          />
                        </div>
                        <div className="name__section">
                          <label>Speciality</label>
                          <select
                            value={speciality}
                            className="spec__select"
                            placeholder="pic"
                            onChange={(e) => setSpeciality(e.target.value)}
                          >
                            <option value={"speciality"}>
                              Allergy and Immunology
                            </option>
                            <option value={2}>Anesthesiology</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                          </select>
                        </div>
                      </>
                    )}

                    <button type="submit" onClick={""}>
                      Update personal info
                    </button>
                  </>
                </>
              }
            </>
          )}
        </div>

        <div className="appts__side">
          <h2>My Appointments</h2>
          {doctorLogin.userInfo.isDoctor && (
            <table>
              <tr>
                <th>patient</th>
                <th>email</th>
                <th>Hour</th>
                <th>Day</th>
                <th>Modify</th>
                <th>Delete</th>
              </tr>
              {doctorAppts &&
                doctorAppts.map((p) => (
                  <DoctorRow
                    click={handleModification}
                    clickDelete={handleDelete}
                  />
                ))}
            </table>
          )}
          {patientLogin.userInfo && (
            <table>
              <tr>
                <th>Doctor</th>
                <th>Hour</th>
                <th>Day</th>
                <th>Modify</th>
                <th>Delete</th>
              </tr>
              {patientAppts &&
                patientAppts.map((p) => (
                  <PatientRow
                    click={handleModification}
                    clickDelete={handleDelete}
                    identify={p._id}
                    doctor={p.doctor}
                    bookingDate={p.bookingDate}
                    startingHour={p.startingHour}
                  />
                ))}
            </table>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProfileScreen;

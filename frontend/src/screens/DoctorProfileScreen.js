import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProfileScreen.css";
import medicalTeam from "../assets/medical-team.png";
import { getDoctorAppts } from "../redux/actions/appointmentActions";
import { ListDoctorDetails } from "../redux/actions/doctorActions";
import DoctorRow from "../components/DoctorRow";
import { doctorLoginReducer } from "../redux/reducers/DoctorReducer";
import PatientRow from "../components/PatientRow";

const DoctorProfileScreen = () => {
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

  const doctorLogin = useSelector((state) => state.doctorLogin);
  const { doctorInfo, docError, docLoading } = doctorLogin;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleModification = () => {};

  const handleDelete = () => {};
  useEffect(() => {
    dispatch(getDoctorAppts(doctorInfo._id));
    //dispatch(ListDoctorDetails(doctorAppts));
  }, [dispatch, doctorInfo]);

  return (
    <div className="profilescreen">
      <h2>My Info</h2>
      <form className="profile__elements" onSubmit={handleSubmit}>
        <div className="info__side">
          <h2>My personal info</h2>
          {docLoading ? (
            <div className="loading">
              <div className="spinner"></div>
            </div>
          ) : docError ? (
            <h3>{docError}</h3>
          ) : (
            <>
              {
                <>
                  <div className="profile__details">
                    <img src={medicalTeam} alt="profile pic" />
                    <p>{doctorInfo.name.split(" ")[0].toUpperCase()}</p>
                  </div>
                  <>
                    <div className="name__section">
                      <label>Name</label>
                      <input
                        type="name"
                        placeholder={doctorInfo.name}
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
                        placeholder={doctorInfo.email}
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

                    <div className="name__section">
                      <label>Address</label>
                      <input
                        type="text"
                        placeholder={doctorInfo.address}
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                      />
                    </div>
                    <div className="name__section">
                      <label>City</label>
                      <select
                        value={city}
                        className="spec__select"
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Choose a city"
                      >
                        <option value={""}>Choose a City</option>
                        <option value={"Casablanca"}>Casablanca</option>
                        <option value={"Fes"}>Fes</option>
                        <option value={"Tangier"}>Tangier</option>
                        <option value={"Salé"}>Salé</option>
                        <option value={"Marrakesh"}>Marrakesh</option>
                        <option value={"Meknes"}>Meknes</option>
                        <option value={"Rabat"}>Rabat</option>
                        <option value={"Oujda"}>Oujda</option>
                        <option value={"Agadir"}>Agadir</option>
                        <option value={"Laayoune"}>Laayoune</option>
                        <option value={"Tetouan"}>Tetouan</option>
                        <option value={"Mohammedia"}>Mohammedia</option>
                        <option value={"Essaouira"}>Essaouira</option>
                        <option value={"Errachidia"}>Errachidia</option>
                        <option value={"Settat"}>Settat</option>
                        <option value={"Safi"}>Safi</option>
                        <option value={"Taroudant"}>Taroudant</option>
                        <option value={"Ouarzazate"}>Ouarzazate</option>
                        <option value={"Ben Guerir"}>Ben Guerir</option>
                        <option value={"Khouribga"}>Khouribga</option>
                      </select>
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
                        onChange={(e) => setSpeciality(e.target.value)}
                      >
                        <option value={""}>Choose a Speciality</option>
                        <option value={"speciality"}>
                          Allergy and Immunology
                        </option>
                        <option value={"Anesthesiology"}>Anesthesiology</option>
                        <option value={"Colon And Rectal Surgery"}>
                          Colon And Rectal Surgery
                        </option>
                        <option value={"Cardiology"}>Cardiology</option>
                        <option value={"Dermatology"}>Dermatology</option>
                        <option value={"Physical Medicine And Rehabilitation"}>
                          Physical Medicine And Rehabilitation
                        </option>
                        <option value={"Emergency medicine"}>
                          Emergency medicine
                        </option>
                        <option value={"Internal medicine"}>
                          Internal medicine
                        </option>
                        <option value={"Neurology"}>Neurology</option>
                        <option value={"Ophthalmology"}>Ophthalmology</option>
                        <option value={"Psychiatry"}>Psychiatry</option>
                        <option value={"Surgery"}>Surgery</option>
                      </select>
                    </div>

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

          <table>
            <tr>
              <th>patient</th>
              <th>Hour</th>
              <th>Day</th>
              <th>Delete</th>
            </tr>
            {doctorAppts &&
              doctorAppts.map((p) => (
                <DoctorRow
                  patientId={p.patient}
                  hour={p.startingHour}
                  day={p.bookingDate}
                  click={handleModification}
                  clickDelete={handleDelete}
                />
              ))}
          </table>
        </div>
      </form>
    </div>
  );
};

export default DoctorProfileScreen;

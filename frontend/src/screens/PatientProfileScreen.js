import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./PatientProfileScreen.css";
import patientPic from "../assets/patient.png";
import {
  getPatientAppts,
  deleteAppointment,
} from "../redux/actions/appointmentActions";
import PatientRow from "../components/PatientRow";
import {
  getPatientProfile,
  UpdatePatientProfile,
} from "../redux/actions/patientActions";
import { PATIENT_UPDATE_PROFILE_RESET } from "../redux/constants/patientConstants";
import axios from "axios";

const PatientProfileScreen = () => {
  const [image, setImage] = useState("profile");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const patientAppointments = useSelector((state) => state.patientAppointments);
  const { patientAppts } = patientAppointments;

  const patientLogin = useSelector((state) => state.patientLogin);
  const { patientInfo, patError, loading } = patientLogin;

  const patientProfile = useSelector((state) => state.patientProfile);
  const { patientProfiler } = patientProfile;

  const apptDelete = useSelector((state) => state.apptDelete);
  const { success: successDelete } = apptDelete;

  const patientProfileUpdate = useSelector(
    (state) => state.patientProfileUpdate
  );
  const { success } = patientProfileUpdate;
  const handleUploadChange = (e) => {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/v1/upload", formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleModification = () => {
    dispatch(
      UpdatePatientProfile(patientInfo._id, { image, name, email, newPassword })
    );
  };

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteAppointment(id));
    }
  };
  useEffect(() => {
    dispatch(getPatientAppts(patientInfo._id));
    dispatch(getPatientProfile(patientInfo._id));
  }, [dispatch, patientInfo, successDelete]);

  return (
    <div className="profilescreen">
      <h2>My Info</h2>
      <form className="profile__elements" onSubmit={handleSubmit}>
        <div className="info__side">
          <h2>My personal info</h2>
          {patientProfiler && (
            <>
              <div className="profile__details">
                <img
                  src={
                    patientProfiler.image ? patientProfiler.image : patientPic
                  }
                  alt="profile pic"
                />
                <input type="file" onChange={uploadFileHandler} />
                <p>{patientProfiler.name}</p>
              </div>
              <>
                <div className="name__section">
                  <label>Name</label>
                  <input
                    type="name"
                    placeholder={patientProfiler.name}
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
                    placeholder={patientProfiler.email}
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

                <button type="submit" onClick={handleModification}>
                  Update personal info
                </button>
                {success && (
                  <p className="updatedInfo__msg">
                    Your personal info are being updated
                  </p>
                )}
              </>
            </>
          )}
        </div>

        <div className="appts__side">
          <h2>My Appointments</h2>

          {patientInfo && (
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
                    clickDelete={deleteHandler}
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

export default PatientProfileScreen;

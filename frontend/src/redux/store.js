import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  doctorDeleteReducer,
  doctorDetailReducer,
  DoctorListBySpecReducer,
  DoctorListReducer,
  doctorLoginReducer,
  doctorProfileReducer,
  DoctorRegisterReducer,
  doctorUpdateProfileReducer,
} from "./reducers/DoctorReducer";
import {
  appointmentUpdateReducer,
  apptCreateReducer,
  apptDeleteReducer,
  apptDetailsReducer,
  doctorAppointmentReducer,
  getAllAppointmentsReducer,
  patientAppointmentReducer,
} from "./reducers/appointmentReducer";
import {
  patientDeleteReducer,
  patientDetailReducer,
  patientLoginReducer,
  patientProfileReducer,
  PatientRegisterReducer,
  patientsListReducer,
  patientUpdateProfileReducer,
} from "./reducers/patientReducer";
import { adminLoginReducer } from "./reducers/adminReducer";

const reducer = combineReducers({
  adminLogin: adminLoginReducer,
  patientLogin: patientLoginReducer,
  patientRegister: PatientRegisterReducer,
  patientDetails: patientDetailReducer,
  patientList: patientsListReducer,
  patientProfile: patientProfileReducer,
  patientProfileUpdate: patientUpdateProfileReducer,
  patientDelete: patientDeleteReducer,
  doctorLogin: doctorLoginReducer,
  doctorRegister: DoctorRegisterReducer,
  doctorList: DoctorListReducer,
  DoctorListBySpec: DoctorListBySpecReducer,
  doctorDetails: doctorDetailReducer,
  doctorProfile: doctorProfileReducer,
  doctorProfileUpdate: doctorUpdateProfileReducer,
  doctorDelete: doctorDeleteReducer,
  appointmentCreate: apptCreateReducer,
  appointmentUpdate: appointmentUpdateReducer,
  appointmentDetails: apptDetailsReducer,
  patientAppointments: patientAppointmentReducer,
  doctorAppointments: doctorAppointmentReducer,
  AllAppointments: getAllAppointmentsReducer,
  apptDelete: apptDeleteReducer,
});

const middleware = [thunk];

const patientInfofromLocalStorage = localStorage.getItem("PatientMedicalInfo")
  ? JSON.parse(localStorage.getItem("PatientMedicalInfo"))
  : null;

const doctorInfofromLocalStorage = localStorage.getItem("DoctorMedicalInfo")
  ? JSON.parse(localStorage.getItem("DoctorMedicalInfo"))
  : null;

const adminInfofromLocalStorage = localStorage.getItem("AdminMedicalInfo")
  ? JSON.parse(localStorage.getItem("AdminMedicalInfo"))
  : null;
const initialeState = {
  patientLogin: { patientInfo: patientInfofromLocalStorage },
  doctorLogin: { doctorInfo: doctorInfofromLocalStorage },
  adminLogin: { adminInfo: adminInfofromLocalStorage },
};

const store = createStore(
  reducer,
  initialeState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  doctorDetailReducer,
  DoctorListBySpecReducer,
  DoctorListReducer,
  doctorLoginReducer,
  DoctorRegisterReducer,
} from "./reducers/DoctorReducer";
import {
  appointmentUpdateReducer,
  apptCreateReducer,
  apptDetailsReducer,
  doctorAppointmentReducer,
  getAllAppointmentsReducer,
  patientAppointmentReducer,
} from "./reducers/appointmentReducer";
import {
  patientDetailReducer,
  patientLoginReducer,
  patientProfileReducer,
  PatientRegisterReducer,
  patientsListReducer,
} from "./reducers/patientReducer";
import { adminLoginReducer } from "./reducers/adminReducer";

const reducer = combineReducers({
  adminLogin: adminLoginReducer,
  doctorLogin: doctorLoginReducer,
  patientLogin: patientLoginReducer,
  doctorRegister: DoctorRegisterReducer,
  patientRegister: PatientRegisterReducer,
  doctorList: DoctorListReducer,
  DoctorListBySpec: DoctorListBySpecReducer,
  doctorDetails: doctorDetailReducer,
  patientDetails: patientDetailReducer,
  patientList: patientsListReducer,
  patientProfile: patientProfileReducer,
  appointmentCreate: apptCreateReducer,
  appointmentUpdate: appointmentUpdateReducer,
  appointmentDetails: apptDetailsReducer,
  patientAppointments: patientAppointmentReducer,
  doctorAppointments: doctorAppointmentReducer,
  AllAppointments: getAllAppointmentsReducer,
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

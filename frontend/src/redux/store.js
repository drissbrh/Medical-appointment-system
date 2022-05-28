import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  doctorDetailReducer,
  DoctorListReducer,
  doctorLoginReducer,
  DoctorRegisterReducer,
} from "./reducers/DoctorReducer";
import {
  appointmentUpdateReducer,
  apptCreateReducer,
  apptDetailsReducer,
  doctorAppointmentReducer,
  patientAppointmentReducer,
} from "./reducers/appointmentReducer";
import {
  patientDetailReducer,
  patientLoginReducer,
} from "./reducers/patientReducer";
import { adminLoginReducer } from "./reducers/adminReducer";

const reducer = combineReducers({
  adminLogin: adminLoginReducer,
  doctorLogin: doctorLoginReducer,
  patientLogin: patientLoginReducer,
  doctorRegister: DoctorRegisterReducer,
  doctorList: DoctorListReducer,
  doctorDetails: doctorDetailReducer,
  patientDetails: patientDetailReducer,
  appointmentCreate: apptCreateReducer,
  appointmentUpdate: appointmentUpdateReducer,
  appointmentDetails: apptDetailsReducer,
  patientAppointments: patientAppointmentReducer,
  doctorAppointments: doctorAppointmentReducer,
});

const middleware = [thunk];

const userInfofromLocalStorage = localStorage.getItem("UserMedicalInfo")
  ? JSON.parse(localStorage.getItem("UserMedicalInfo"))
  : null;
const initialeState = {
  patientLogin: { userInfo: userInfofromLocalStorage },
  doctorLogin: { userInfo: userInfofromLocalStorage },
  adminLogin: { userInfo: userInfofromLocalStorage },
};

const store = createStore(
  reducer,
  initialeState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

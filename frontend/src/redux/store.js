import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
} from "./reducers/userReducer";
import {
  doctorDetailReducer,
  DoctorListReducer,
  doctorLoginReducer,
  DoctorRegisterReducer,
} from "./reducers/DoctorReducer";
import {
  apptCreateReducer,
  apptDetailsReducer,
} from "./reducers/appointmentReducer";
import {
  patientDetailReducer,
  patientLoginReducer,
} from "./reducers/patientReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  doctorLogin: doctorLoginReducer,
  patientLogin: patientLoginReducer,
  userRegister: userRegisterReducer,
  userList: userListReducer,
  doctorList: DoctorListReducer,
  doctorRegister: DoctorRegisterReducer,
  doctorDetails: doctorDetailReducer,
  patientDetails: patientDetailReducer,
  appointmentCreate: apptCreateReducer,
  appointmentDetails: apptDetailsReducer,
});

const middleware = [thunk];

const userInfofromLocalStorage = localStorage.getItem("UserMedicalInfo")
  ? JSON.parse(localStorage.getItem("UserMedicalInfo"))
  : null;
const initialeState = {
  userLogin: { userInfo: userInfofromLocalStorage },
  patientLogin: { userInfo: userInfofromLocalStorage },
};

const store = createStore(
  reducer,
  initialeState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

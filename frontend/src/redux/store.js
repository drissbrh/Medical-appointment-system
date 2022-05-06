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
  DoctorRegisterReducer,
} from "./reducers/DoctorReducer";
import { apptCreateReducer } from "./reducers/appointmentReducer";
import { patientLoginReducer } from "./reducers/patientReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  patientLogin: patientLoginReducer,
  userRegister: userRegisterReducer,
  userList: userListReducer,
  doctorList: DoctorListReducer,
  doctorRegister: DoctorRegisterReducer,
  doctorDetails: doctorDetailReducer,
  appointmentCreate: apptCreateReducer,
});

const middleware = [thunk];

const userInfofromLocalStorage = localStorage.getItem("UserMedicalInfo")
  ? JSON.parse(localStorage.getItem("UserMedicalInfo"))
  : null;
const initialeState = {
  userLogin: { userInfo: userInfofromLocalStorage },
};

const store = createStore(
  reducer,
  initialeState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

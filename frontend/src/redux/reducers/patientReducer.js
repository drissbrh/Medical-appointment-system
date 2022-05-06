import {
  PATIENT_LOGIN_FAIL,
  PATIENT_LOGIN_REQUEST,
  PATIENT_LOGIN_SUCCESS,
  PATIENT_LOGOUT,
} from "../constants/patientConstants";

export const patientLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case PATIENT_LOGIN_REQUEST:
      return { loading: true };
    case PATIENT_LOGIN_SUCCESS:
      return { loading: false, PATIENTInfo: action.payload };
    case PATIENT_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case PATIENT_LOGOUT:
      return {};
    default:
      return state;
  }
};

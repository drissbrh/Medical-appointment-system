import {
  PATIENT_DETAILS_FAIL,
  PATIENT_DETAILS_REQUEST,
  PATIENT_DETAILS_SUCCESS,
  PATIENT_LIST_FAIL,
  PATIENT_LIST_REQUEST,
  PATIENT_LIST_RESET,
  PATIENT_LIST_SUCCESS,
  PATIENT_LOGIN_FAIL,
  PATIENT_LOGIN_REQUEST,
  PATIENT_LOGIN_SUCCESS,
  PATIENT_LOGOUT,
  PATIENT_REGISTER_REQUEST,
} from "../constants/patientConstants";

export const patientLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case PATIENT_LOGIN_REQUEST:
      return { loading: true };
    case PATIENT_LOGIN_SUCCESS:
      return { loading: false, patientInfo: action.payload };
    case PATIENT_LOGIN_FAIL:
      return { loading: false, patError: action.payload };
    case PATIENT_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const PatientRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case PATIENT_REGISTER_REQUEST:
      return { loading: true };
    case PATIENT_REGISTER_REQUEST:
      return { loading: false, patientInfo: action.payload };
    case PATIENT_REGISTER_REQUEST:
      return { loading: false, patError: action.payload };
    case PATIENT_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const patientDetailReducer = (state = { patient: {} }, action) => {
  switch (action.type) {
    case PATIENT_DETAILS_REQUEST:
      return { loading: true };
    case PATIENT_DETAILS_SUCCESS:
      return { loading: false, patient: action.payload };
    case PATIENT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const patientsListReducer = (state = { patients: [] }, action) => {
  switch (action.type) {
    case PATIENT_LIST_REQUEST:
      return { patientsListLoading: true };
    case PATIENT_LIST_SUCCESS:
      return { patientsListLoading: false, patients: action.payload };
    case PATIENT_LIST_FAIL:
      return { patientsListLoading: false, patientsListError: action.payload };
    case PATIENT_LIST_RESET:
      return { patients: [] };
    default:
      return state;
  }
};

import {
  PATIENT_DELETE_FAIL,
  PATIENT_DELETE_REQUEST,
  PATIENT_DELETE_SUCCESS,
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
  PATIENT_PROFILE_FAIL,
  PATIENT_PROFILE_REQUEST,
  PATIENT_PROFILE_SUCCESS,
  PATIENT_REGISTER_FAIL,
  PATIENT_REGISTER_REQUEST,
  PATIENT_REGISTER_SUCCESS,
  PATIENT_UPDATE_PROFILE_FAIL,
  PATIENT_UPDATE_PROFILE_REQUEST,
  PATIENT_UPDATE_PROFILE_RESET,
  PATIENT_UPDATE_PROFILE_SUCCESS,
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
    case PATIENT_REGISTER_SUCCESS:
      return { loading: false, patientInfo: action.payload };
    case PATIENT_REGISTER_FAIL:
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

export const patientProfileReducer = (
  state = { patientProfiler: {} },
  action
) => {
  switch (action.type) {
    case PATIENT_PROFILE_REQUEST:
      return { loading: true };
    case PATIENT_PROFILE_SUCCESS:
      return { loading: false, patientProfiler: action.payload };
    case PATIENT_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const patientUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case PATIENT_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case PATIENT_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, patientInfo: action.payload };
    case PATIENT_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    case PATIENT_UPDATE_PROFILE_RESET:
      return { state: {} };
    default:
      return state;
  }
};

export const patientDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PATIENT_DELETE_REQUEST:
      return { loading: true };
    case PATIENT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PATIENT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

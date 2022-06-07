import {
  ALL_APPTS_LIST_FAIL,
  ALL_APPTS_LIST_REQUEST,
  ALL_APPTS_LIST_RESET,
  ALL_APPTS_LIST_SUCCESS,
  APPOINTMENT_CREATE_FAIL,
  APPOINTMENT_CREATE_REQUEST,
  APPOINTMENT_CREATE_RESET,
  APPOINTMENT_CREATE_SUCCESS,
  APPOINTMENT_DELETE_FAIL,
  APPOINTMENT_DELETE_REQUEST,
  APPOINTMENT_DELETE_SUCCESS,
  APPOINTMENT_DETAILS_FAIL,
  APPOINTMENT_DETAILS_REQUEST,
  APPOINTMENT_DETAILS_SUCCESS,
  APPOINTMENT_UPDATE_FAIL,
  APPOINTMENT_UPDATE_REQUEST,
  APPOINTMENT_UPDATE_RESET,
  APPOINTMENT_UPDATE_SUCCESS,
  DOCTOR_APPTS_LIST_FAIL,
  DOCTOR_APPTS_LIST_REQUEST,
  DOCTOR_APPTS_LIST_RESET,
  DOCTOR_APPTS_LIST_SUCCESS,
  PATIENT_APPTS_LIST_FAIL,
  PATIENT_APPTS_LIST_REQUEST,
  PATIENT_APPTS_LIST_RESET,
  PATIENT_APPTS_LIST_SUCCESS,
} from "../constants/appointmentConstants";

export const apptCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case APPOINTMENT_CREATE_REQUEST:
      return {
        loading: true,
      };
    case APPOINTMENT_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        appointment: action.payload,
      };
    case APPOINTMENT_CREATE_FAIL:
      return {
        loading: false,
        appCreateError: action.payload,
      };
    case APPOINTMENT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const apptDetailsReducer = (state = { appointment: {} }, action) => {
  switch (action.type) {
    case APPOINTMENT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case APPOINTMENT_DETAILS_SUCCESS:
      return {
        loading: false,
        appointment: action.payload,
      };
    case APPOINTMENT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const appointmentUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case APPOINTMENT_UPDATE_REQUEST:
      return {
        updateApptLoading: true,
      };
    case APPOINTMENT_UPDATE_SUCCESS:
      return {
        updateApptLoading: false,
        updateApptSuccess: true,
      };
    case APPOINTMENT_UPDATE_FAIL:
      return {
        updateApptLoading: false,
        appUpdateError: action.payload,
      };
    case APPOINTMENT_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const patientAppointmentReducer = (
  state = { patientAppts: [] },
  action
) => {
  switch (action.type) {
    case PATIENT_APPTS_LIST_REQUEST:
      return { loading: true };
    case PATIENT_APPTS_LIST_SUCCESS:
      return { loading: false, patientAppts: action.payload };
    case PATIENT_APPTS_LIST_FAIL:
      return { loading: false, error: action.payload };
    case PATIENT_APPTS_LIST_RESET:
      return { patientAppts: [] };
    default:
      return state;
  }
};

export const doctorAppointmentReducer = (
  state = { doctorAppts: [] },
  action
) => {
  switch (action.type) {
    case DOCTOR_APPTS_LIST_REQUEST:
      return { loading: true };
    case DOCTOR_APPTS_LIST_SUCCESS:
      return { loading: false, doctorAppts: action.payload };
    case DOCTOR_APPTS_LIST_FAIL:
      return { loading: false, error: action.payload };
    case DOCTOR_APPTS_LIST_RESET:
      return { doctorAppts: [] };
    default:
      return state;
  }
};

export const getAllAppointmentsReducer = (
  state = { allAppointments: [] },
  action
) => {
  switch (action.type) {
    case ALL_APPTS_LIST_REQUEST:
      return { allApptsLoading: true };
    case ALL_APPTS_LIST_SUCCESS:
      return { allApptsLoading: false, allAppointments: action.payload };
    case ALL_APPTS_LIST_FAIL:
      return { allApptsLoading: false, AllApptsError: action.payload };
    case ALL_APPTS_LIST_RESET:
      return { allAppointments: [] };
    default:
      return state;
  }
};

export const apptDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case APPOINTMENT_DELETE_REQUEST:
      return { loading: true };
    case APPOINTMENT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case APPOINTMENT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

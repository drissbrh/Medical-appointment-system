import {
  APPOINTMENT_CREATE_FAIL,
  APPOINTMENT_CREATE_REQUEST,
  APPOINTMENT_CREATE_RESET,
  APPOINTMENT_CREATE_SUCCESS,
  APPOINTMENT_DETAILS_FAIL,
  APPOINTMENT_DETAILS_REQUEST,
  APPOINTMENT_DETAILS_SUCCESS,
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
        error: action.payload,
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

import {
  DOCTOR_REGISTER_REQUEST,
  DOCTOR_REGISTER_SUCCESS,
  DOCTOR_REGISTER_FAIL,
  DOCTOR_LOGOUT,
  DOCTOR_LIST_REQUEST,
  DOCTOR_LIST_SUCCESS,
  DOCTOR_LIST_FAIL,
  DOCTOR_LIST_RESET,
  DOCTOR_DETAILS_REQUEST,
  DOCTOR_DETAILS_SUCCESS,
  DOCTOR_DETAILS_FAIL,
  DOCTOR_LOGIN_REQUEST,
  DOCTOR_LOGIN_SUCCESS,
  DOCTOR_LOGIN_FAIL,
  DOCTOR_DELETE_REQUEST,
  DOCTOR_DELETE_SUCCESS,
  DOCTOR_DELETE_FAIL,
  DOCTOR_UPDATE_PROFILE_REQUEST,
  DOCTOR_UPDATE_PROFILE_SUCCESS,
  DOCTOR_UPDATE_PROFILE_FAIL,
  DOCTOR_UPDATE_PROFILE_RESET,
  DOCTOR_PROFILE_REQUEST,
  DOCTOR_PROFILE_SUCCESS,
  DOCTOR_PROFILE_FAIL,
} from "../constants/doctorConstants";

export const doctorLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case DOCTOR_LOGIN_REQUEST:
      return { docLoading: true };
    case DOCTOR_LOGIN_SUCCESS:
      return { docLoading: false, doctorInfo: action.payload };
    case DOCTOR_LOGIN_FAIL:
      return { docLoading: false, docError: action.payload };
    case DOCTOR_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const DoctorRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case DOCTOR_REGISTER_REQUEST:
      return { loading: true };
    case DOCTOR_REGISTER_SUCCESS:
      return { loading: false, doctorInfo: action.payload };
    case DOCTOR_REGISTER_FAIL:
      return { loading: false, docError: action.payload };
    case DOCTOR_LOGOUT:
      return {};
    default:
      return state;
  }
};

/*
export const DoctorListReducer = (state = { doctors: [] }, action) => {
  switch (action.type) {
    case DOCTOR_LIST_REQUEST:
      return { loading: true };
    case DOCTOR_LIST_SUCCESS:
      return { loading: false, doctors: action.payload };
    case DOCTOR_LIST_FAIL:
      return { loading: false, error: action.payload };
    case DOCTOR_LIST_RESET:
      return { doctors: [] };
    default:
      return state;
  }
};
*/
export const DoctorListReducer = (state = { doctors: [] }, action) => {
  switch (action.type) {
    case DOCTOR_LIST_REQUEST:
      return { loading: true, doctors: [] };
    case DOCTOR_LIST_SUCCESS:
      return {
        loading: false,
        doctors: action.payload.doctors,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case DOCTOR_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const DoctorListBySpecReducer = (state = { doctors: [] }, action) => {
  switch (action.type) {
    case DOCTOR_LIST_REQUEST:
      return { loading: true, doctors: [] };
    case DOCTOR_LIST_SUCCESS:
      return {
        loading: false,
        doctors: action.payload.doctors,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case DOCTOR_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const DoctorListByBothReducer = (state = { doctors: [] }, action) => {
  switch (action.type) {
    case DOCTOR_LIST_REQUEST:
      return { loading: true, doctors: [] };
    case DOCTOR_LIST_SUCCESS:
      return {
        loading: false,
        doctors: action.payload.doctors,
      };
    case DOCTOR_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const doctorDetailReducer = (state = { doctor: {} }, action) => {
  switch (action.type) {
    case DOCTOR_DETAILS_REQUEST:
      return { loading: true };
    case DOCTOR_DETAILS_SUCCESS:
      return { loading: false, doctor: action.payload };
    case DOCTOR_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const doctorProfileReducer = (
  state = { doctorProfiler: {} },
  action
) => {
  switch (action.type) {
    case DOCTOR_PROFILE_REQUEST:
      return { loading: true };
    case DOCTOR_PROFILE_SUCCESS:
      return { loading: false, doctorProfiler: action.payload };
    case DOCTOR_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const doctorUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case DOCTOR_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case DOCTOR_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, doctorInfo: action.payload };
    case DOCTOR_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    case DOCTOR_UPDATE_PROFILE_RESET:
      return { state: {} };
    default:
      return state;
  }
};

export const doctorDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DOCTOR_DELETE_REQUEST:
      return { loading: true };
    case DOCTOR_DELETE_SUCCESS:
      return { loading: false, success: true };
    case DOCTOR_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

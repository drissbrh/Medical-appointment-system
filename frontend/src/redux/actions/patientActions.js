import axios from "axios";
import {
  PATIENT_LOGIN_REQUEST,
  PATIENT_LOGIN_SUCCESS,
  PATIENT_LOGIN_FAIL,
  PATIENT_DETAILS_SUCCESS,
  PATIENT_DETAILS_FAIL,
  PATIENT_DETAILS_REQUEST,
  PATIENT_LOGOUT,
  PATIENT_REGISTER_REQUEST,
  PATIENT_REGISTER_SUCCESS,
  PATIENT_REGISTER_FAIL,
  PATIENT_LIST_REQUEST,
  PATIENT_LIST_SUCCESS,
  PATIENT_LIST_FAIL,
} from "../constants/patientConstants";

export const loginPatient = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: PATIENT_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "api/v1/patients/login",
      { email, password },
      config
    );

    dispatch({
      type: PATIENT_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("PatientMedicalInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: PATIENT_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logoutPatient = () => (dispatch) => {
  localStorage.removeItem("PatientMedicalInfo");
  dispatch({ type: PATIENT_LOGOUT });

  document.location.href = "/login";
};

export const registerPatient = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: PATIENT_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/v1/patients/",
      {
        name,
        email,
        password,
        isPatient: true,
      },
      config
    );

    dispatch({
      type: PATIENT_REGISTER_SUCCESS,
      payload: data,
    });

    localStorage.setItem("PatientMedicalInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: PATIENT_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const ListPatientDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PATIENT_DETAILS_REQUEST,
    });
    const {
      patientLogin: { patientInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${patientInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/v1/patients/${id}`, config);

    dispatch({
      type: PATIENT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logoutPatient());
    }
    dispatch({
      type: PATIENT_DETAILS_FAIL,
      payload: message,
    });
  }
};

export const listPatients = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PATIENT_LIST_REQUEST,
    });

    const {
      adminLogin: { adminInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${adminInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/v1/patients`, config);

    dispatch({
      type: PATIENT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logoutPatient());
    }
    dispatch({
      type: PATIENT_LIST_FAIL,
      payload: message,
    });
  }
};

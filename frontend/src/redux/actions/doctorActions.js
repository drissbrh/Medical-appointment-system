import axios from "axios";

import {
  DOCTOR_REGISTER_REQUEST,
  DOCTOR_REGISTER_SUCCESS,
  DOCTOR_REGISTER_FAIL,
  DOCTOR_LOGOUT,
  DOCTOR_LIST_REQUEST,
  DOCTOR_LIST_SUCCESS,
  DOCTOR_LIST_FAIL,
  DOCTOR_DETAILS_REQUEST,
  DOCTOR_DETAILS_SUCCESS,
  DOCTOR_DETAILS_FAIL,
  DOCTOR_DETAILS_RESET,
  DOCTOR_LOGIN_REQUEST,
  DOCTOR_LOGIN_SUCCESS,
  DOCTOR_LOGIN_FAIL,
} from "../constants/doctorConstants";

export const loginDoctor = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: DOCTOR_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "api/v1/doctors/login",
      { email, password },
      config
    );

    dispatch({
      type: DOCTOR_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("DoctorMedicalInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: DOCTOR_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const registerDoctor =
  (name, email, password, address, city, phoneNumber, speciality) =>
  async (dispatch) => {
    try {
      dispatch({
        type: DOCTOR_REGISTER_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/v1/doctors/",
        {
          name,
          email,
          password,
          address,
          city,
          phoneNumber,
          speciality,
          isDoctor: true,
        },
        config
      );

      dispatch({
        type: DOCTOR_REGISTER_SUCCESS,
        payload: data,
      });

      localStorage.setItem("DoctorMedicalInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: DOCTOR_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

/*export const listDoctors = () => async (dispatch) => {
  try {
    dispatch({
      type: DOCTOR_LIST_REQUEST,
    });
    const { data } = await axios.get(`/api/v1/doctors`);

    dispatch({
      type: DOCTOR_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logoutDoctor());
    }
    dispatch({
      type: DOCTOR_LIST_FAIL,
      payload: message,
    });
  }
};*/

export const listDoctorsBycity =
  (keyword = "", pageNumber = "") =>
  async (dispatch) => {
    try {
      dispatch({
        type: DOCTOR_LIST_REQUEST,
      });
      const { data } = await axios.get(
        `/api/v1/doctors/search/city?keyword=${keyword}&pageNumber=${pageNumber}`
      );

      dispatch({
        type: DOCTOR_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logoutDoctor());
      }
      dispatch({
        type: DOCTOR_LIST_FAIL,
        payload: message,
      });
    }
  };

export const listDoctorsBySpec =
  (keyword = "", pageNumber = "") =>
  async (dispatch) => {
    try {
      dispatch({
        type: DOCTOR_LIST_REQUEST,
      });
      const { data } = await axios.get(
        `/api/v1/doctors/search/spec?keyword=${keyword}&pageNumber=${pageNumber}`
      );

      dispatch({
        type: DOCTOR_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logoutDoctor());
      }
      dispatch({
        type: DOCTOR_LIST_FAIL,
        payload: message,
      });
    }
  };

export const ListDoctorDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DOCTOR_DETAILS_REQUEST,
    });
    const {
      patientLogin: { patientInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${patientInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/v1/doctors/${id}`, config);

    dispatch({
      type: DOCTOR_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logoutDoctor());
    }
    dispatch({
      type: DOCTOR_DETAILS_FAIL,
      payload: message,
    });
  }
};

export const logoutDoctor = () => (dispatch) => {
  localStorage.removeItem("DoctorMedicalInfo");
  dispatch({ type: DOCTOR_LOGOUT });

  document.location.href = "/login";
};

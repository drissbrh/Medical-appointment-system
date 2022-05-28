import axios from "axios";

import {
  APPOINTMENT_CREATE_FAIL,
  APPOINTMENT_CREATE_REQUEST,
  APPOINTMENT_CREATE_SUCCESS,
  APPOINTMENT_DETAILS_FAIL,
  APPOINTMENT_DETAILS_REQUEST,
  APPOINTMENT_DETAILS_SUCCESS,
  APPOINTMENT_UPDATE_FAIL,
  APPOINTMENT_UPDATE_REQUEST,
  APPOINTMENT_UPDATE_SUCCESS,
  DOCTOR_APPTS_LIST_FAIL,
  DOCTOR_APPTS_LIST_REQUEST,
  DOCTOR_APPTS_LIST_SUCCESS,
  PATIENT_APPTS_LIST_FAIL,
  PATIENT_APPTS_LIST_REQUEST,
  PATIENT_APPTS_LIST_SUCCESS,
} from "../constants/appointmentConstants";
import { logout } from "./doctorActions";

export const createAppts = (appointment) => async (dispatch, getState) => {
  try {
    dispatch({
      type: APPOINTMENT_CREATE_REQUEST,
    });

    const {
      patientLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/v1/appts`, appointment, config);

    dispatch({
      type: APPOINTMENT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: APPOINTMENT_CREATE_FAIL,
      payload: message,
    });
  }
};

export const getAppointmentDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: APPOINTMENT_DETAILS_REQUEST,
    });
    const {
      patientLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/v1/appts/${id}`, config);

    dispatch({
      type: APPOINTMENT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: APPOINTMENT_DETAILS_FAIL,
      payload: message,
    });
  }
};

export const UpdateAppointment =
  (apptId, apptDetails) => async (dispatch, getState) => {
    try {
      dispatch({
        type: APPOINTMENT_UPDATE_REQUEST,
      });
      const {
        patientLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.put(
        `/api/v1/appts/update/${apptId}/`,
        apptDetails,
        config
      );

      dispatch({
        type: APPOINTMENT_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: APPOINTMENT_UPDATE_FAIL,
        payload: message,
      });
    }
  };

export const getDoctorAppts = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DOCTOR_APPTS_LIST_REQUEST,
    });
    const {
      patientLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/v1/appts/mydoctor/${id}`, config);

    dispatch({
      type: DOCTOR_APPTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: DOCTOR_APPTS_LIST_FAIL,
      payload: message,
    });
  }
};

export const getPatientAppts = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PATIENT_APPTS_LIST_REQUEST,
    });
    const {
      patientLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/v1/appts/mypatient/${id}`, config);

    dispatch({
      type: PATIENT_APPTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PATIENT_APPTS_LIST_FAIL,
      payload: message,
    });
  }
};

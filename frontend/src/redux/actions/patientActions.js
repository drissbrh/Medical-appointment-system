import axios from "axios";
import {
  PATIENT_LOGIN_REQUEST,
  PATIENT_LOGIN_SUCCESS,
  PATIENT_LOGIN_FAIL,
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

    localStorage.setItem("UserMedicalInfo", JSON.stringify(data));
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

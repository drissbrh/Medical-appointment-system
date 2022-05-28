import {
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
} from "../constants/adminConstants";

export const adminLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_REQUEST:
      return { adminLoading: true };
    case ADMIN_LOGIN_SUCCESS:
      return { adminLoading: false, userInfo: action.payload };
    case ADMIN_LOGIN_FAIL:
      return { adminLoading: false, adminError: action.payload };
    case ADMIN_LOGOUT:
      return {};
    default:
      return state;
  }
};

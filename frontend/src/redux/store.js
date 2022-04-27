import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

const middleware = [thunk];

const userInfofromLocalStorage = localStorage.getItem("UserMedicalInfo")
  ? JSON.parse(localStorage.getItem("UserMedicalInfo"))
  : null;
const initialeState = {
  userLogin: { userInfo: userInfofromLocalStorage },
};

const store = createStore(
  reducer,
  initialeState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

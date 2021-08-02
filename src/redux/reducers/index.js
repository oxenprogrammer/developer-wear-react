import auth from "./auth";
import { combineReducers } from "redux";
import { getData } from "./wear";
import message from "./message";

export default combineReducers({
  getData,
  auth,
  message,
});

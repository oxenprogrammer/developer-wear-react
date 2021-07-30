import auth from "./auth";
import { combineReducers } from "redux";
import message from "./message";

export default combineReducers({
  auth,
  message,
});
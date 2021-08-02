import { getAllShirts, getData } from "./wear";

import auth from "./auth";
import { combineReducers } from "redux";
import message from "./message";

export default combineReducers({
  getAllShirts,
  getData,
  auth,
  message,
});

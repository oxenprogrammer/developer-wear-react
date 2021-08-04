import { getAllShirts, getData, getSingleShirt } from "./wear";

import auth from "./auth";
import { combineReducers } from "redux";
import message from "./message";

export default combineReducers({
  getSingleShirt,
  getAllShirts,
  getData,
  auth,
  message,
});

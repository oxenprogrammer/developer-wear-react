import { addFavourite, getAllShirts, getData, getSingleShirt } from "./wear";

import auth from "./auth";
import { combineReducers } from "redux";
import message from "./message";

export default combineReducers({
  addFavourite,
  getSingleShirt,
  getAllShirts,
  getData,
  auth,
  message,
});

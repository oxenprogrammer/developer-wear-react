import {
  addFavourite,
  getAllShirts,
  getMyFavourites,
  getSingleShirt,
} from "./wear";

import auth from "./auth";
import { combineReducers } from "redux";
import message from "./message";

export default combineReducers({
  addFavourite,
  getSingleShirt,
  getAllShirts,
  getMyFavourites,
  auth,
  message,
});

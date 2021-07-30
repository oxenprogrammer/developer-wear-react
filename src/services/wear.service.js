import authHeader from "./auth-header";
import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/";

const getAllShirts = () => {
  return axios.get(API_URL + "shirts", { headers: authHeader() });
};

const getAllUsers = () => {
  return axios.get(API_URL + "users", { headers: authHeader() });
};

const getAllFavourites = () => {
  return axios.get(API_URL + "favourites", { headers: authHeader() });
};

const getMyFavourites = () => {
  return axios.get(API_URL + "my_favourites", { headers: authHeader() });
};

export default {
  getAllShirts,
  getAllUsers,
  getAllFavourites,
  getMyFavourites,
};
import axios from "axios";
require("dotenv").config();

const API_URL = "https://gentle-thicket-58693.herokuapp.com/api/v1/";

const register = (username, email, password, password_confirmation) => {
  return axios.post(API_URL + "users", {
    username,
    email,
    password,
    password_confirmation,
  });
};

const login = async (email, password) => {
  const response = await axios.post(API_URL + "login", {
    email,
    password,
  });
  if (response.data.token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};

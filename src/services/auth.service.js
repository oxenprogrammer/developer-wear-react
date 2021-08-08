import axios from "axios";
require('dotenv').config()

const API_URL='http://127.0.0.1:3000/api/v1/';

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
  console.log("first response", response);
  if (response.data.token) {
    console.log("response", response);
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

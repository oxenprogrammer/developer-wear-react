import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/";

const register = (username, email, password) => {
  return axios.post(API_URL + "users", {
    username,
    email,
    password,
    password_confirmation
  });
};

const login = async (username, password) => {
  const response = await axios
    .post(API_URL + "login", {
      username,
      password,
    });
  if (response.token) {
    localStorage.setItem("user", JSON.stringify(response));
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
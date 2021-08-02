import authHeader from "./auth-header";
import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/";
const perPage = 9;

const getAllShirts = (page) => {
  const offset = page * perPage - perPage;
  return axios.get(`${API_URL}shirts?limit=${perPage}&offset=${offset}`, {
    headers: authHeader(),
  });
};

const getAllUsers = (page) => {
  const offset = page * perPage - perPage;
  return axios.get(`${API_URL}users?limit=${perPage}&offset=${offset}`, {
    headers: authHeader(),
  });
};

const getAllFavourites = (page) => {
  const offset = page * perPage - perPage;
  return axios.get(`${API_URL}favourites?limit=${perPage}&offset=${offset}`, {
    headers: authHeader(),
  });
};

const getMyFavourites = async (page) => {
  const offset = page * perPage - perPage;
  return await axios.get(
    `${API_URL}my_favourites?limit=${perPage}&offset=${offset}`,
    { headers: authHeader() }
  );
};

const addFavourite = async (shirtId) => {
  const response = await axios.post(API_URL + `shirts/${shirtId}/favourites`, {
    headers: authHeader(),
  });
  return response;
};

const addShirt = async (name, description, price, image) => {
  const response = await axios.post(
    API_URL + `shirts/${shirtId}/favourites`,
    {
      name,
      description,
      price,
      image,
    },
    {
      headers: authHeader(),
    }
  );
  return response;
};

export default {
  addFavourite,
  addShirt,
  getAllShirts,
  getAllUsers,
  getAllFavourites,
  getMyFavourites,
};

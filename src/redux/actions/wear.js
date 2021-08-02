import {
  FAVOURITE_FAIL,
  FAVOURITE_LOADING,
  FAVOURITE_SUCCESS,
  SHIRTS_FAIL,
  SHIRTS_LOADING,
  SHIRTS_SUCCESS,
} from "./types";

import WearService from "../../services/wear.service";

export const getMyFavourites = (page) => async (dispatch) => {
  try {
    const response = await WearService.getMyFavourites(page);
    const result = response.data;

    dispatch({
      type: FAVOURITE_LOADING,
    });

    dispatch({
      type: FAVOURITE_SUCCESS,
      payload: result.data,
      count: result.count,
      status: result.status,
      error: "",
    });
  } catch (error) {
    dispatch({
      type: FAVOURITE_FAIL,
      payload: error.message,
    });
  }
};

export const getAllShirts = (page) => async (dispatch) => {
  try {
    const response = await WearService.getAllShirts(page);
    const result = response.data;

    dispatch({
      type: SHIRTS_LOADING,
    });

    dispatch({
      type: SHIRTS_SUCCESS,
      payload: result.data,
      count: result.count,
      status: result.status,
      error: "",
    });
  } catch (error) {
    dispatch({
      type: SHIRTS_FAIL,
      payload: error.message,
    });
  }
};

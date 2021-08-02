import {
  FAVOURITE_FAIL,
  FAVOURITE_LOADING,
  FAVOURITE_SUCCESS,
  SHIRTS_FAIL,
  SHIRTS_LOADING,
  SHIRTS_SUCCESS,
} from "../actions/types";

const initialState = {
  loading: false,
  data: [],
  error: "",
  count: 0,
};

export const getData = (state = initialState, action) => {
  switch (action.type) {
    case FAVOURITE_LOADING:
      return { ...state, loading: true };
    case FAVOURITE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        count: action.count,
        data: action.payload,
      };
    case FAVOURITE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getAllShirts = (state = initialState, action) => {
  switch (action.type) {
    case SHIRTS_LOADING:
      return { ...state, loading: true };
    case SHIRTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        count: action.count,
        data: action.payload,
      };
    case SHIRTS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

import {
  FAVOURITE_FAIL,
  FAVOURITE_LOADING,
  FAVOURITE_SUCCESS,
  SHIRTS_FAIL,
  SHIRTS_LOADING,
  SHIRTS_SUCCESS,
  SHIRT_FAIL,
  SHIRT_LOADING,
  SHIRT_SUCCESS,
} from "../actions/types";

const initialState = {
  loading: false,
  data: [],
  error: "",
  count: 0,
};

const initialStateShirt = {
  loading: false,
  data: {},
  error: "",
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

export const getSingleShirt = (state = initialStateShirt, action) => {
  switch (action.type) {
    case SHIRT_LOADING:
      return { ...state, loading: true };
    case SHIRT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        data: { ...state.data, [action.shirtId]: action.payload },
      };
    case SHIRT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addFavourite = (state = {}, action) => {
  switch (action.type) {
    case SHIRT_LOADING:
      return { ...state, loading: true };
    case SHIRT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload,
      };
    case SHIRT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

import {
  FAVOURITE_FAIL,
  FAVOURITE_LOADING,
  FAVOURITE_SUCCESS,
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

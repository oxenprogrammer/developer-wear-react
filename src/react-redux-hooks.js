import {
  useDispatch as originalUseDispatch,
  useSelector as originalUseSelector,
} from "react-redux";

export const useSelector = (state) => originalUseSelector(state);
export const useDispatch = () => originalUseDispatch();

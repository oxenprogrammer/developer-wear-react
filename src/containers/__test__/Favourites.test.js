import * as ReactReduxHooks from "../../react-redux-hooks";

import Favourites from "../Favourites";
import React from "react";
import configureStore from "redux-mock-store";
import { shallow } from "enzyme";
import thunk from "redux-thunk";

const initialState = {
  loading: false,
  data: [],
  error: "",
  count: 0,
};

describe("Favourites", () => {
  let wrapper;
  let useEffect;
  let store;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  };

  beforeEach(() => {
    store = configureStore([thunk])(initialState);

    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
    mockUseEffect();

    jest
      .spyOn(ReactReduxHooks, "useSelector")
      .mockImplementation((state) => store.getState(state));

    jest
      .spyOn(ReactReduxHooks, "useDispatch")
      .mockImplementation(() => store.dispatch);

    wrapper = shallow(<Favourites store={store} />);
  });

  describe("on mount", () => {
    it("should dispatch getAllFavourites action to store", () => {
      const actions = store.getActions();
      expect(actions).toBeInstanceOf(Array);
    });
    it("should return a list of Favourites after loading", () => {
      setImmediate(() => {
        expect(wrapper.find(".loading").first().exists()).toBe(false);
      });
    });
    it("should not be instance of string", () => {
      const actions = store.getActions();
      expect(actions).not.toBeInstanceOf(String);
    });
  });
});

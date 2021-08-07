import * as ReactReduxHooks from "../../react-redux-hooks";

import React from "react";
import Register from "../Register";
import configureStore from "redux-mock-store";
import { shallow } from "enzyme";
import thunk from "redux-thunk";

const user = {
  token:
    "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.R3jkTSo9lfq6aj-kg7fELRIdE751enHyuBhBz1RgUDs",
  email: "moses@gmail.com",
  username: "moses",
  admin: true,
};

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

describe("Register", () => {
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

    wrapper = shallow(<Register store={store} />);
  });

  describe("on mount", () => {
    it("should dispatch getSingleRegister action to store", () => {
      const actions = store.getActions();
      expect(actions).toBeInstanceOf(Array);
    });
    it("should return a shirt", () => {
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

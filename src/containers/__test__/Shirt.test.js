import * as ReactReduxHooks from "../../react-redux-hooks";

import React from "react";
import Shirt from "../Shirt";
import configureStore from "redux-mock-store";
import { shallow } from "enzyme";
import thunk from "redux-thunk";

const initialStateShirt = {
  loading: false,
  data: {},
  error: "",
};

const match = {
  params: {
    id: "1",
  },
};

describe("Shirt", () => {
  let wrapper;
  let useEffect;
  let store;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  };

  beforeEach(() => {
    store = configureStore([thunk])(initialStateShirt);

    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
    mockUseEffect();

    jest
      .spyOn(ReactReduxHooks, "useSelector")
      .mockImplementation((state) => store.getState(state));

    jest
      .spyOn(ReactReduxHooks, "useDispatch")
      .mockImplementation(() => store.dispatch);

    wrapper = shallow(<Shirt match={match} store={store} />);
  });

  describe("on mount", () => {
    it("should dispatch getSingleShirt action to store", () => {
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

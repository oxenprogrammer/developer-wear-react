import { Home } from "../Home";
import React from "react";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";

describe("Home Component", () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("should render the Home Page", () => {
    act(() => {
      render(<Home />, container);
    });
    expect(container).toBeDefined();
  });

  it("should not have props", () => {
    act(() => {
      render(<Home home="home" />, container);
    });
    expect(container).toBeFalsy;
  });
});
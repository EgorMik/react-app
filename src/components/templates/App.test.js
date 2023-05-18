import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import App from "./App";
import store from "../../store";

describe("App", () => {
  it("should renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  })});
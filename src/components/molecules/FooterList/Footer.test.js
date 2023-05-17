import React from "react";
import renderer from "react-test-renderer";
import FooterList from "./Footer";
import { Provider } from "react-redux";
import store from '../../../store'

describe("TodoList", () => {
    it("should renders correctly", () => {
      const tree = renderer
        .create(
          <Provider store={store}>
            <FooterList />
          </Provider>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    })});

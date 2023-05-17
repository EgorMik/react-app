import React from "react";
import renderer from "react-test-renderer";
import Todo from "./Todo";
import { Provider } from "react-redux";
import store from '../../../store'

const props = {
    id: "1",
    index: 0,
    isCompleted: false,
    description: "Test Todo",
  };
describe("Todo", () => {
    it("should renders correctly", () => {
      const tree = renderer
        .create(
          <Provider store={store}>
            <Todo {...props}/>
          </Provider>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    })});

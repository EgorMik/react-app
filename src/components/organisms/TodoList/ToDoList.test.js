import React from "react";
import renderer from "react-test-renderer";
import TodoList from "./TodoList";
import { Provider } from "react-redux";
import store from '../../../store'
describe("TodoList", () => {
    it("should renders correctly", () => {
      const tree = renderer
        .create(
          <Provider store={store}>
            <TodoList />
          </Provider>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    })});

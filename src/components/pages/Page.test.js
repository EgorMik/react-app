import React from "react";
import renderer from "react-test-renderer";
import Page from "./Page";

describe("Page", () => {
  it("should renders correctly", () => {
    const tree = renderer.create(<Page name="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
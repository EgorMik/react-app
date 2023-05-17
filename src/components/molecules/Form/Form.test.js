import React from "react";
import renderer from "react-test-renderer";
import Form from "./Form";

describe("Form", () => {
  it("should renders correctly", () => {
    const tree = renderer.create(<Form name="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
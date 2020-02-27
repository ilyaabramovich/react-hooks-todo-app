import React from "react";
import { render } from "@testing-library/react";
import { Toolbar } from "./Toolbar";

test("it renders", () => {
  const { asFragment } = render(<Toolbar count={1} />);
  expect(asFragment()).toMatchSnapshot();
});

test("displays items count correctly", () => {
  const { getByLabelText } = render(<Toolbar count={1} />);
  expect(getByLabelText("TODO counter")).toHaveTextContent("1 item left");
});

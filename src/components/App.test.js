import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const addButton = getByText(/^add$/i);
  expect(addButton).toBeInTheDocument();
});

test("input clears after adding new todo", () => {
  const { getByText, getByRole } = render(<App />);
  const input = getByRole("textbox");
  const button = getByText(/^add$/i);

  fireEvent.change(input, { target: { value: "a" } });
  fireEvent.click(button);
  expect(input.value).toBe("");
});

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { AddTodoForm } from "./AddTodoForm";

test("renders form with button disabled by default", () => {
  const { getByRole } = render(<AddTodoForm />);
  const button = getByRole("button");
  expect(button).toHaveAttribute("disabled");
});

test("changing input enables submit button", () => {
  const { getByRole } = render(<AddTodoForm />);
  const input = getByRole("textbox");
  const button = getByRole("button");

  fireEvent.change(input, { target: { value: "a" } });
  expect(button).not.toHaveAttribute("disabled");
});

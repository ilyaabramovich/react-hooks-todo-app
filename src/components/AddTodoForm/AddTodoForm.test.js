import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { AddTodoForm } from "./AddTodoForm";

test("it renders", () => {
  const { asFragment } = render(<AddTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

test("renders form with button disabled by default", () => {
  const { getByRole } = render(<AddTodoForm />);
  const button = getByRole("button");
  expect(button).toBeDisabled();
});

test("changing input enables submit button", () => {
  const { getByRole } = render(<AddTodoForm />);
  const input = getByRole("textbox");
  const button = getByRole("button");

  fireEvent.change(input, { target: { value: "a" } });
  expect(button).not.toBeDisabled();
});

it("submits", () => {
  const onSubmit = jest.fn();
  const { getByTestId } = render(<AddTodoForm onSubmit={onSubmit} />);
  fireEvent.submit(getByTestId("form"));
  expect(onSubmit).toHaveBeenCalled();
});

test("input clears after adding new todo", () => {
  const onSubmit = jest.fn();
  const { getByTestId, getByRole } = render(
    <AddTodoForm onSubmit={onSubmit} />
  );
  const input = getByRole("textbox");
  fireEvent.change(input, { target: { value: "a" } });
  fireEvent.submit(getByTestId("form"));
  expect(input.value).toBe("");
});

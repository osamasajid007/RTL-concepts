import { render, screen, fireEvent } from "@testing-library/react";

import AddInput from "../AddInput";
test("button is present", () => {
  const { getByTestId } = render(<AddInput />);
  const addBtn = getByTestId("add-btn");
  expect(addBtn.textContent).toBe("Add");
});
test("input initially empty and then changes", async () => {
  const { getByTestId } = render(<AddInput todos={[]} setTodos={() => {}} />);
  const inputEl = getByTestId("inputVal");
  const addBtn = getByTestId("add-btn");

  fireEvent.change(inputEl, {
    target: {
      value: "texts",
    },
  });

  expect(inputEl.value).toBe("texts");
});
test("input initially empty and then changes", async () => {
  const { getByTestId } = render(<AddInput todos={[]} setTodos={() => {}} />);
  const inputEl = getByTestId("inputVal");

  expect(inputEl.value).toBe("");
});

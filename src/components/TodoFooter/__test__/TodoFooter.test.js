import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";
const MockTodo = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};
test("should return the correct amount of tast ", () => {
  const { getByTestId } = render(<MockTodo numberOfIncompleteTasks={5} />);
  const paragramEl = getByTestId("tasks");
  console.log;
  expect(paragramEl.textContent).toBe("5 tasks left");
});
test("should return Task with single value", () => {
  const { getByTestId } = render(<MockTodo numberOfIncompleteTasks={1} />);
  const paragramEl = getByTestId("tasks");
  expect(paragramEl.textContent).toBe("1 task left");
});

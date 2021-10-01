import { render, screen } from "@testing-library/react";
import Header from "../Header";
test("Header with the name present", async () => {
  const { getByText } = render(<Header title="my header" />);
  const headingEl = getByText("my header");
  expect(headingEl.textContent).toBe("my header");
});
test("Header with the name present", async () => {
  const { getByRole } = render(<Header title="my header" />);
  const headingEl = getByRole("heading", { name: "my header" });
  expect(headingEl.textContent).toBe("my header");
});

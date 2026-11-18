import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("shows all projects, then filters by technology", () => {
  render(<App />);

  // All 5 projects show at the start
  expect(screen.getAllByRole("article")).toHaveLength(5);

  // Clicking "Node" shows only FairShare
  fireEvent.click(screen.getByRole("button", { name: "Node" }));
  expect(screen.getAllByRole("article")).toHaveLength(1);
  expect(screen.getByText("FairShare")).toBeInTheDocument();
});

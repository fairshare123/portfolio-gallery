import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("shows all projects, then filters by technology", () => {
  render(<App />);

  // All 6 projects show at the start
  expect(screen.getAllByRole("article")).toHaveLength(6);

  // Clicking "Node" shows only FairShare
  fireEvent.click(screen.getByRole("button", { name: "Node" }));
  expect(screen.getAllByRole("article")).toHaveLength(1);
  expect(screen.getByText("FairShare")).toBeInTheDocument();
});

test("saves and unsaves a project with the heart button", () => {
  render(<App />);
  expect(screen.getByText(/0 saved/)).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Save FairShare" }));
  expect(screen.getByText(/1 saved/)).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Unsave FairShare" }));
  expect(screen.getByText(/0 saved/)).toBeInTheDocument();
});

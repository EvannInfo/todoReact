import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

import { Counter } from "../components/Counter";

describe("Counter", () => {
  it("increments the count when the button is clicked", () => {
    render(<Counter />);
    const button = screen.getByText("count is 0").closest("button");

    fireEvent.click(button);
    expect(screen.getByText("count is 1")).toBeInTheDocument();
  });
});

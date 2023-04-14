import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

import { Events } from "../components/Events";

describe("Events", () => {
  it("should call onClick handler when button is clicked", () => {
    const { getByText } = render(<Events />);
    const button = getByText("Click me");
    const consoleSpy = jest.spyOn(console, "log");

    fireEvent.click(button);

    expect(consoleSpy).toHaveBeenCalledWith("Click event triggered");
    consoleSpy.mockRestore();
  });

  it("should call onChange handler when input value changes", () => {
    const { getByRole } = render(<Events />);
    const input = getByRole("textbox");
    const consoleSpy = jest.spyOn(console, "log");

    fireEvent.change(input, { target: { value: "test" } });

    expect(consoleSpy).toHaveBeenCalledWith("On change event triggered");
    consoleSpy.mockRestore();
  });

  it("should not bubble up when stopPropagation is called", () => {
    const { getByText } = render(<Events />);
    const button = getByText("Stop Propagation");
    const consoleSpy = jest.spyOn(console, "log");

    fireEvent.click(button);

    expect(consoleSpy).toHaveBeenCalledWith("Stop propagation event triggered");
    expect(consoleSpy).not.toHaveBeenCalledWith("Bubble event triggered");
    consoleSpy.mockRestore();
  });

  it("should bubble up when event is not stopped", () => {
    const { getByText } = render(<Events />);
    const button = getByText("Capture");
    const consoleSpy = jest.spyOn(console, "log");

    fireEvent.click(button);

    expect(consoleSpy).toHaveBeenCalledWith("Capture event triggered");
    expect(consoleSpy).toHaveBeenCalledWith("Bubble event triggered");
    consoleSpy.mockRestore();
  });

  it("should call onMouseEnter handler when mouse enters element", () => {
    const { getByText } = render(<Events />);
    const div = getByText("Mouse enter event");
    const consoleSpy = jest.spyOn(console, "log");

    fireEvent.mouseEnter(div);

    expect(consoleSpy).toHaveBeenCalledWith("Mouse enter event triggered");
    consoleSpy.mockRestore();
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";

import "@testing-library/jest-dom";

import App from "../App";

describe("App should render", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the Vite and React logos", () => {
    render(<App />);

    expect(screen.getByAltText("Vite logo")).toBeInTheDocument();
    expect(screen.getByAltText("React logo")).toBeInTheDocument();
  });

  it('renders the "Click on the Vite and React logos to learn more" text', () => {
    render(<App />);

    expect(
      screen.getByText(/Click on the Vite and React logos to learn more/i)
    ).toBeInTheDocument();
  });
});

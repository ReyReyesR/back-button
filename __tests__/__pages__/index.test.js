import React from 'react'
import { render, screen } from "@testing-library/react";
import App from "../../pages/index";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    const heading = screen.getAllByRole("heading");
    expect(heading.length).toEqual(16);
  });
});
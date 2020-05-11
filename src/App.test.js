import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

const fillFormAndSubmit = () => {
  
  fireEvent.change(screen.getByLabelText(/name:/), {
    target: { value: "Octavio Vercetti" },
  });
  fireEvent.change(screen.getByLabelText(/role:/), {
    target: { value: "Software Engineer" },
  });
  fireEvent.change(screen.getByLabelText(/email:/), {
    target: { value: "octavio@vercetti.vision" },
  });
  fireEvent.change(screen.getByLabelText(/password:/), {
    target: { value: "superSecret23" },
  });
  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);
};

describe("My app", () => {
  it("shows one page of the form at a time", () => {
    render(<App />);
    const submitButton = screen.getByText("Submit", { selector: "button" });
    expect(submitButton).toBeInTheDocument();
  });

  it("after filling and validation shows next page", () => {
    render(<App />);
    fillFormAndSubmit();
    expect(screen.getByText(/Receive updates/)).toBeInTheDocument();
  });

  it("can toggle checkboxes", () => {
    render(<App />);
    fillFormAndSubmit();
    const checkbox = screen.getByTestId("checkbox");
    const initialState = checkbox.checked;
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(!initialState);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(initialState);
  });

  it("Console.logs the resultant data on the final page.", () => {
    render(<App />);
    fillFormAndSubmit();
    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);
  });
});

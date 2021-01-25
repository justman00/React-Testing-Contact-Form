import React from "react";
import { render, fireEvent, getAllByText } from "@testing-library/react";
import ContactForm from "./ContactForm";

describe("<ContactForm />", () => {
  test("renders without errors", () => {
    render(<ContactForm />);
  });

  it("should submit the form and add form data to the screen", () => {
    const { getByLabelText, getByText } = render(<ContactForm />);

    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);

    fireEvent.change(firstNameInput, { target: { value: "lUNa-lOoVeGOOD" } });
    fireEvent.change(lastNameInput, { target: { value: null } });
    fireEvent.change(emailInput, { target: { value: "Luna_.2345@gmail.com" } });
    fireEvent.change(messageInput, { target: { value: "MY NAME IS LUNA" } });

    fireEvent.click(getByText(/\s submit/i));

    expect(
      getAllByText(
        valueOf(firstNameInput),
        valueOf(lastNameInput),
        valueOf(emailInput),
        valueOf(messageInput)
      )
    ).toBeInTheDocument();

    expect(firstNameInput.value).toBe("");
    expect(lastNameInput.value).toBe("");
    expect(emailInput.value).toBe("");
    expect(messageInput.value).toBe("");
  });
});

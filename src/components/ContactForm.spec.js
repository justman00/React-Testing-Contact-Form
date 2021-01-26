import React from "react";
import {
  render,
  fireEvent,
  getAllByText,
  screen,
} from "@testing-library/react";
import ContactForm from "./ContactForm";

describe("<ContactForm />", async () => {
  test("renders the basic fields without errors", () => {
    render(<ContactForm />);
    expect(
      screen.getByRole("input", { name: "firstName" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("input", { name: /lastname/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("input", { name: /email/i })).toBeInTheDocument();
    expect(
      screen.getByRole("textarea", { name: /message/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("input", { type: "submit" })).toBeInTheDocument();
  });

  it("should submit the form and add form data to the screen", () => {
    const { getByLabelText, getByText } = render(<ContactForm />);

    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);

    fireEvent.change(firstNameInput, { target: { value: "Edd" } });
    fireEvent.change(lastNameInput, { target: { value: "burke" } });
    fireEvent.change(emailInput, {
      target: { value: "bluebil1049@hotmail.com" },
    });
    fireEvent.change(messageInput, { target: { value: "MY NAME IS EDDDD" } });

    fireEvent.click(getByText(/\s submit/i));

    expect(firstNameInput.value).toBe("");
    expect(lastNameInput.value).toBe("");
    expect(emailInput.value).toBe("");
    expect(messageInput.value).toBe("");
  });

  it("should throw an error when inputs have a wrong pattern", () => {
    const { getByTestId } = render(<ContactForm />);

    const firstNameErrorMessage = getByTestId("firstName-error");
    const lastNameErrorMessage = getByTestId("lastName-error");
    const emailErrorMessage = getByTestId("email-error");

    expect(firstNameErrorMessage).toBe("Looks like there was an error");
    expect(lastNameErrorMessage).toBe("Looks like there was an error");
    expect(emailErrorMessage).toBe("Looks like there was an error");
  });
});

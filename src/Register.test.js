import {
  findByTestId,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Register from "./register";

describe("register component", () => {
  test("looking for username", async () => {
    render(<Register />);

    let usernameDoc = await screen.findByTestId("username");
    fireEvent.change(usernameDoc, { target: { value: "username" } });
    expect(usernameDoc).toHaveValue();
  });

  test("looking for mail id", async () => {
    render(<Register />);

    let mailDoc = await screen.findByTestId("mail");
    fireEvent.change(mailDoc, { target: { value: "abc@test.com" } });
    expect(mailDoc.value).toBeTruthy();
  });

  test("looking for password", async () => {
    render(<Register />);

    let passDoc = await screen.findByTestId("pass");
    fireEvent.change(passDoc, { target: { value: "password123" } });
    expect(passDoc.value).toBeTruthy();
  });

  test("looking for button function", async () => {
    render(<Register />);
    let usernameDoc = await screen.findByTestId("username");
    fireEvent.change(usernameDoc, { target: { value: "username" } });
    let btn = screen.getByRole("button");
    fireEvent.click(btn);
    expect(usernameDoc.value).toBe("");

    let mailDoc = await screen.findByTestId("mail");
    fireEvent.change(mailDoc, { target: { value: "abc@test.com" } });
    let btn1 = screen.getByRole("button");
    fireEvent.click(btn1);
    expect(mailDoc.value).toBe("");

    let passDoc = await screen.findByTestId("pass");
    fireEvent.change(passDoc, { target: { value: "password123" } });
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(passDoc.value).toBe("");
  });
});

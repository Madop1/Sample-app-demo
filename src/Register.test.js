import {
  findByTestId,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "./register";

describe("register component", () => {
  test("looking for username", async () => {
    render(<Register />);

    let usernameDoc = await screen.findByTestId("username");
    fireEvent.change(usernameDoc, { target: { value: "username" } });
    expect(usernameDoc.value).toBeTruthy();
  });

  test("looking for mail id", async () => {
    render(<Register />);

    let mailDoc = await screen.findByTestId("mail");
    fireEvent.change(mailDoc, { target: { value: "abc@test.com" } });
    expect(mailDoc.value).toBeTruthy();
  });

  test("looking for button", () => {
    render(<Register />);

    let btnDoc = screen.getByRole("button");
    userEvent.click(btnDoc);
    expect(btnDoc).toBeValid();
  });
});

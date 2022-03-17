import {
  findByTestId,
  fireEvent,
  getByTestId,
  render,
  screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./login";
// import userEvent from "@testing-library/user-event";

describe("login component", () => {
  test("looking for value on input field", async () => {
    render(<Login />);

    let loginDocument = await screen.findByTestId("emails");
    fireEvent.change(loginDocument, { target: { value: "text@test.com" } });
    // console.log(loginDocument.value);
    expect(loginDocument.value).toBeTruthy();
  });
  test("looking for password", async () => {
    render(<Login />);
    let passwordDoc = await screen.findByTestId("password");
    fireEvent.change(passwordDoc, { target: { value: "password123" } });
    expect(passwordDoc.value).toBeTruthy();
  });
  test("looking for button clicked", async () => {
    render(<Login />);
    let loginDocument = await screen.findByTestId("emails");
    fireEvent.change(loginDocument, { target: { value: "text@test.com" } });
    let btn = screen.getByRole("button");
    fireEvent.click(btn);
    expect(loginDocument.value).toBe("");

    let passwordDoc = await screen.findByTestId("password");
    fireEvent.change(passwordDoc, { target: { value: "password123" } });
    let btn1 = screen.getByRole("button");
    fireEvent.click(btn1);
    expect(loginDocument.value).toBe("");
  });
});

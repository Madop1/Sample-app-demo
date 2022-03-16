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
    const { findByTestId } = render(<Login />);

    let loginDocument = await findByTestId("emails");
    fireEvent.change(loginDocument, { target: { value: "text@test.com" } });
    // console.log(loginDocument.value);

    expect(loginDocument.value).toBeTruthy();
  });
  test("looking for password", async () => {
    const { findByTestId } = render(<Login />);
    let passwordDoc = await findByTestId("password");
    fireEvent.change(passwordDoc, { target: { value: "password123" } });
    expect(passwordDoc.value).toBeTruthy();
  });
  test("looking for button clicked", () => {
    render(<Login />);
    let btnDocument = screen.getByTestId("btn");
    userEvent.click(btnDocument);
    expect(btnDocument).toBeValid()

  });
});

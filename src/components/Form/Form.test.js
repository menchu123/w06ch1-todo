import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it is called", () => {
    test("Then it should render an input text", () => {
      render(<Form />);

      const textbox = screen.getByRole("textbox");

      expect(textbox).toBeInTheDocument();
    });

    test("Then it should render a submit button", () => {
      render(<Form />);

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });
});

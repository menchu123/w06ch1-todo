import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../redux/store";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it is called", () => {
    test("Then it should render an input text", () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <Form />
        </Provider>
      );

      const textbox = screen.getByRole("textbox");

      expect(textbox).toBeInTheDocument();
    });

    test("Then it should render a submit button", () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <Form />
        </Provider>
      );

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });
});

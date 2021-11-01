import { render, screen } from "@testing-library/react";
import Task from "./Task";
import ReactTestRenderer from "react-test-renderer";
import configureStore from "../../redux/store";
import { Provider } from "react-redux";

describe("Given a Task component", () => {
  describe("When it is passed a 'cool' text", () => {
    test("Then it should render an input with a 'cool' value", () => {
      const value = "cool";

      const task = {
        id: 3,
        task: value,
        done: true,
      };

      const store = configureStore();
      render(
        <Provider store={store}>
          <Task task={task} />
        </Provider>
      );

      const taskComponent = screen.getByRole("textbox");

      expect(taskComponent).toHaveValue(value);
    });
  });

  describe("When it recives and object", () => {
    test("then it should render a task with the task text inside", () => {
      const task = {
        id: 3,
        task: "Sacar a Elsa",
        done: true,
      };

      const store = configureStore();
      const taskComponent = ReactTestRenderer.create(
        <Provider store={store}>
          <Task task={task} />
        </Provider>
      );
      expect(taskComponent.toJSON()).toMatchSnapshot();
    });
  });
});

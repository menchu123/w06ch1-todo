import { render, screen } from "@testing-library/react";
import Task from "./Task";
import ReactTestRenderer from "react-test-renderer";

describe("Given a Task component", () => {
  describe("When it is passed a 'cool' text", () => {
    test("Then it should render an input with a 'cool' value", () => {
      const value = "cool";

      const task = {
        id: 3,
        task: value,
        done: true,
      };

      render(<Task task={task} />);

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

      const taskComponent = ReactTestRenderer.create(<Task task={task} />);
      expect(taskComponent.toJSON()).toMatchSnapshot();
    });
  });
});

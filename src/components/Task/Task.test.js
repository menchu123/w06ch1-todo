import { render, screen } from "@testing-library/react";
import Task from "./Task";
import ReactTestRenderer from "react-test-renderer";

describe("Given a Task component", () => {
  describe("When it is passed a 'cool' text", () => {
    test("Then it should render an input with a 'cool' value", () => {
      const value = "cool";

      render(<Task taskText={value} />);

      const task = screen.getByRole("textbox");

      expect(task).toHaveValue(value);
    });
  });

  describe("When it recives and object", () => {
    test("then it should render a task with the task text inside", () => {
      const task = {
        id: 3,
        task: "Sacar a Elsa",
        done: true,
      };

      const value = task.task;

      const taskComponent = ReactTestRenderer.create(<Task taskText={value} />);
      expect(taskComponent.toJSON()).toMatchSnapshot();
    });
  });
});

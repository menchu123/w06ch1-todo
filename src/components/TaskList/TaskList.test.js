import { render, screen } from "@testing-library/react";
import TaskList from "./TaskList";

describe("Given a TaskList component", () => {
  describe("When it is called", () => {
    test("Then it should render a list", () => {
      render(<TaskList />);

      const taskList = screen.getByRole("list");

      expect(taskList).toBeInTheDocument();
    });
  });
});

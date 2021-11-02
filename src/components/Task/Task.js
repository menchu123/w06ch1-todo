import { useState } from "react";
import useTasks from "../../hooks/useTasks";
import "./Task.css";

const Task = ({ task }) => {
  const { deleteTask, updateTask } = useTasks();

  const onDelete = (event) => {
    event.preventDefault();
    deleteTask(task.id);
  };

  const initialData = task.task;

  const [taskData, setTaskData] = useState(initialData);

  const onChange = (event) => {
    event.preventDefault();
    setTaskData(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: task.id,
      task: taskData,
      done: task.done,
    };

    updateTask(newTask);
    event.target.querySelector(".task__text").blur();
  };

  return (
    <li className="task form-check list-group-item d-flex justify-content-between">
      <div className="task__left">
        <input
          type="checkbox"
          name="task"
          id="task"
          className="form-check-input"
        />
        <form onSubmit={(event) => onSubmit(event)}>
          <input
            type="text"
            className="task__text form-control border-0"
            value={taskData}
            onChange={(event) => onChange(event)}
          ></input>
        </form>
      </div>
      <button
        className="task__delete btn btn-danger pull-right"
        onClick={onDelete}
      >
        -
      </button>
    </li>
  );
};

export default Task;

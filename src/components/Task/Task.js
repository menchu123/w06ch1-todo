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
  const [isEditing, setisEditing] = useState(false);

  const onChange = (event) => {
    setTaskData(event.target.value);
  };

  const changeChecked = () => {
    updateTask({
      ...task,
      done: !task.done,
    });
  };

  const onUpdate = (event) => {
    event.preventDefault();
    const newTask = {
      id: task.id,
      task: taskData,
      done: task.done,
    };

    if (taskData === "") {
      deleteTask(task.id);
    } else {
      updateTask(newTask);
      setisEditing(false);
      if (event.target.querySelector(".task__text")) {
        event.target.querySelector(".task__text").blur();
      }
    }
  };

  return (
    <li className="task form-check list-group-item d-flex justify-content-between">
      <div className="task__left">
        <input
          type="checkbox"
          checked={task.done}
          onChange={changeChecked}
          name="task-check"
          id="task-check"
          className="form-check-input"
        />
        <form
          className="form d-flex justify-content-between"
          onSubmit={isEditing ? (event) => onUpdate(event) : onDelete}
        >
          <div className="form-group task__text-input">
            <input
              type="text"
              className="task__text form-control border-0"
              value={taskData}
              onChange={(event) => onChange(event)}
              onFocus={() => setisEditing(true)}
              onBlur={(event) => onUpdate(event)}
            ></input>
          </div>
          <button className={`task__delete btn btn-danger pull-right`}>
            -
          </button>
        </form>
      </div>
    </li>
  );
};

export default Task;

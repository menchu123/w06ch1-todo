import useTasks from "../../hooks/useTasks";
import "./Task.css";

const Task = ({ task }) => {
  const { deleteTask } = useTasks();

  const onDelete = (event) => {
    event.preventDefault();
    deleteTask(task.id);
  };

  return (
    <li className="task form-check list-group-item d-flex justify-content-between align-items-center">
      <div className="task__left">
        <input
          type="checkbox"
          name="task"
          id="task"
          className="form-check-input"
        />
        <input
          type="text"
          className="task__text form-control border-0"
          value={task.task}
          onChange={() => {}}
        ></input>
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

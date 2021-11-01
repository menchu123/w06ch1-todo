import { useState } from "react";
import useTasks from "../../hooks/useTasks";

const Form = () => {
  const { createTask } = useTasks();

  const initialData = { task: "" };
  const [taskData, setTaskData] = useState(initialData);

  const changeData = (event) => {
    setTaskData({ ...taskData, [event.target.id]: event.target.value });
  };

  const resetForm = () => {
    setTaskData(initialData);
  };

  const onCreateTask = (event) => {
    event.preventDefault();
    const url = "https://todo-api-w06ch1.herokuapp.com/tasks";
    const newTask = {
      task: taskData.task,
      done: false,
    };

    createTask(newTask, url);

    resetForm();
  };

  return (
    <form
      className="form-row align-items-center todo__form"
      onSubmit={onCreateTask}
    >
      <div className="row">
        <div className="form-group col-10">
          <input
            type="text"
            id="task"
            className="form-control"
            required
            formNoValidate
            autoComplete="off"
            placeholder="What do you want to do?"
            value={taskData.task}
            onChange={changeData}
          ></input>
        </div>
        <div className="form-group col-2 p-0">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;

import { useState } from "react";
import useTasks from "../../hooks/useTasks";

const Form = () => {
  const { tasks, createTask } = useTasks();

  const initialData = { task: "" };
  const [taskData, setTaskData] = useState(initialData);

  const changeData = (event) => {
    setTaskData({ ...taskData, [event.target.id]: event.target.value });
  };

  return (
    <div className="form-row align-items-center todo__form">
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
    </div>
  );
};

export default Form;

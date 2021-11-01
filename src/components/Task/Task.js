const Task = () => {
  return (
    <li className="task form-check list-group-item d-flex justify-content-between align-items-center">
      <div className="task__left">
        <input
          type="checkbox"
          name="isDone"
          id="isDone"
          className="form-check-input"
        />
        <label htmlFor="isDone" className="form-check-label">
          Lavar los platos
        </label>
      </div>
      <button className="task__delete btn btn-danger pull-right">-</button>
    </li>
  );
};

export default Task;

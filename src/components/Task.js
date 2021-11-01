const Task = () => {
  return (
    <div className="task form-check">
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
  );
};

export default Task;

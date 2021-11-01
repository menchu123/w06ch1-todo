import "./Form.css";

const Form = () => {
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
          ></input>
        </div>
        <div className="form-group col-2">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;

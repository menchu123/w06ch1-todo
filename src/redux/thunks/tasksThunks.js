import {
  createTaskAction,
  deleteTaskAction,
  loadTasksAction,
  updateTaskAction,
} from "../actions/actionCreators";

const urlApi = "https://todo-api-w06ch1.herokuapp.com/tasks";

export const loadTasksThunk = () => async (dispatch) => {
  const response = await fetch(urlApi);
  const tasks = await response.json();

  dispatch(loadTasksAction(tasks));
};

export const createTaskThunk = (task) => async (dispatch) => {
  const response = await fetch(urlApi, {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  });
  task = await response.json();
  dispatch(createTaskAction(task));
};

export const deleteTaskThunk = (id) => async (dispatch) => {
  const response = await fetch(`${urlApi}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    dispatch(deleteTaskAction(id));
  }
};

export const updateTaskThunk = (task) => async (dispatch) => {
  const response = await fetch(`${urlApi}/${task.id}`, {
    method: "PUT",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  });

  task = await response.json();
  dispatch(updateTaskAction(task));
};

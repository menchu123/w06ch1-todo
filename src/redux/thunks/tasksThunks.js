import { loadTasksAction } from "../actions/actionCreators";

const urlApi = "https://todo-api-w06ch1.herokuapp.com/tasks";

export const loadTasksThunk = () => async (dispatch) => {
  const response = await fetch(urlApi);
  const tasks = await response.json();

  dispatch(loadTasksAction(tasks));
};

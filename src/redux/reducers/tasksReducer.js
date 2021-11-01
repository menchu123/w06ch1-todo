import actionTypes from "../actions/actionTypes";

const tasksReducer = (tasks = [], action) => {
  let newTasks = tasks;

  switch (action.type) {
    case actionTypes.loadTasks:
      newTasks = [...action.tasks];
      break;
    case actionTypes.createTask:
      newTasks = [...newTasks, action.task];
      break;
    default:
      return [...tasks];
  }

  return newTasks;
};

export default tasksReducer;

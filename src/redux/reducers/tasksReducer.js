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
    case actionTypes.deleteTask:
      newTasks = tasks.filter((task) => task.id !== action.id);
      break;
    case actionTypes.updateTask:
      newTasks = tasks.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
      break;
    default:
      return [...tasks];
  }

  return newTasks;
};

export default tasksReducer;

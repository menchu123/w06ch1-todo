import actionTypes from "../actions/actionTypes";

const tasksReducer = (tasks = [], action) => {
  let newTasks;

  switch (action.type) {
    case actionTypes.loadTasks:
      newTasks = [...tasks];
      break;
    default:
      return newTasks;
  }
};

export default tasksReducer;

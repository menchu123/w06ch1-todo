import actionTypes from "./actionTypes";

export const loadTasksAction = (tasks) => ({
  type: actionTypes.loadTasks,
  tasks,
});

export const loadTaskAction = (task) => ({
  type: actionTypes.loadTask,
  task,
});
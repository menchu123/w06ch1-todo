import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTaskThunk, loadTasksThunk } from "../redux/thunks/tasksThunks";

const useTasks = () => {
  const tasks = useSelector(({ tasks }) => tasks);
  const dispatch = useDispatch();

  const loadTasks = useCallback(() => {
    dispatch(loadTasksThunk());
  }, [dispatch]);

  const createTask = useCallback(
    (task) => {
      dispatch(createTaskThunk(task));
    },
    [dispatch]
  );

  return {
    tasks,
    loadTasks,
    createTask,
  };
};

export default useTasks;

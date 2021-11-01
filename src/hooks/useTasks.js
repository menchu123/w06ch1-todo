import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTasksThunk } from "../redux/thunks/tasksThunks";

const useTasks = () => {
  const tasks = useSelector(({ tasks }) => tasks);
  const dispatch = useDispatch();

  const loadTasks = useCallback(() => {
    dispatch(loadTasksThunk());
  }, [dispatch]);

  return {
    tasks,
    loadTasks,
  };
};

export default useTasks;

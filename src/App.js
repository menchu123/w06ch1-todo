import { useEffect } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Task from "./components/Task/Task";
import TaskList from "./components/TaskList/TaskList";
import useTasks from "./hooks/useTasks";

function App() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);
  console.log(tasks);

  return (
    <div className="todo-app container p-0">
      <h1 className="todo-app__title m-5 text-center">Do things!!!!</h1>
      <Form />
      <TaskList>
        {tasks ? (
          tasks.map((task) => <Task taskText={task.task} key={task.id} />)
        ) : (
          <div>cool</div>
        )}
      </TaskList>
    </div>
  );
}

export default App;

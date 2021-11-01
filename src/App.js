import "./App.css";
import Form from "./components/Form/Form";
import Task from "./components/Task/Task";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <div className="todo-app container p-0">
      <h1 className="todo-app__title m-5 text-center">Do things!!!!</h1>
      <Form />
      <TaskList>
        <Task />
        <Task />
        <Task />
        <Task />
      </TaskList>
    </div>
  );
}

export default App;

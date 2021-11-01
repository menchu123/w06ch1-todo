import "./App.css";
import Form from "./components/Form/Form";
import Task from "./components/Task";

function App() {
  return (
    <div className="todo-app container">
      <h1 className="todo-app__title">Do things!!!!</h1>
      <Form />
      <Task />
    </div>
  );
}

export default App;

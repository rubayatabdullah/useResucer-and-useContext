import React, { useReducer } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/initialTasks";
import taskReducer from "./taskReducer";

let nextId = 4;

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const handleAdd = (text) => {
    dispatch({
      type: "added",
      nextId,
      text,
    });
  };

  const handleChange = (task) => {
    dispatch({
      type: "changed",
      task,
    });
  };

  const handleDelete = (taskId) => {
    dispatch({
      type: "deleted",
      taskId,
    });
  };

  return (
    <div className="App">
      <h2>Simple Todo App</h2>
      <AddTask onAdd={handleAdd} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChange}
        onDeleteTask={handleDelete}
      />
    </div>
  );
}

export default App;

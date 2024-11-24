import React, { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/initialTasks";

let nextId = 4;

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleAdd = (text) => {
    const newList = [
      ...tasks,
      {
        id: nextId++,
        title: text,
        done: false,
      },
    ];

    setTasks(newList);
  };

  const handleChange = (task) => {
    const changedTasks = tasks.map((newTask) => {
      return newTask.id === task.id
        ? { ...newTask, title: task.title, done: task.done }
        : newTask;
    });
    setTasks(changedTasks);
  };

  const handleDelete = (taskId) => {
    const changedTasks = tasks.filter((t) => t.id !== taskId);
    setTasks(changedTasks);
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

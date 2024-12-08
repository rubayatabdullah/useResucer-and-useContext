import { createContext, useContext, useReducer } from "react";
import { initialTasks } from "../data/initialTasks";
import taskReducer from "../taskReducer";

export const TasksContext = createContext(null);

let nextId = 4;

export default function TaskProvider({ children }) {
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
    <TasksContext.Provider
      value={{
        tasks,
        onAddTask: handleAdd,
        onChangeTask: handleChange,
        onDeleteTask: handleDelete,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export const useTask = () => {
  return useContext(TasksContext);
};

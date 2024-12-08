import { TasksContext, useTask } from "../contexts/TaskContext";
import Task from "./Task";

export default function TaskList() {
  const { tasks } = useTask(TasksContext);
  const taskElements = tasks.map((task) => (
    <li key={task.id}>
      <Task task={task} />
    </li>
  ));

  return (
    <>
      <ul>{taskElements}</ul>
    </>
  );
}

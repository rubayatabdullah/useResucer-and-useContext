import Task from "./Task";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  const taskElements = tasks.map((task) => (
    <li key={task.id}>
      <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
    </li>
  ));

  return (
    <>
      <ul>{taskElements}</ul>
    </>
  );
}

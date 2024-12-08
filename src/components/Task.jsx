import React, { useState } from "react";
import { TasksContext, useTask } from "../contexts/TaskContext";

export default function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const { onChangeTask, onDeleteTask } = useTask(TasksContext);

  const taskContent = isEditing ? (
    <>
      <input
        value={task.title}
        onChange={(event) =>
          onChangeTask({
            ...task,
            title: event.target.value,
          })
        }
      />
      <button onClick={() => setIsEditing(false)}>Save</button>
    </>
  ) : (
    <>
      <label htmlFor={task.id}>{task.title}</label>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </>
  );

  return (
    <>
      <input
        type="checkbox"
        id={task.id}
        checked={task.done}
        onChange={(e) => onChangeTask({ ...task, done: e.target.checked })}
      />
      {taskContent}
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </>
  );
}

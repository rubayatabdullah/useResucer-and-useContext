import React, { useState } from "react";

export default function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  const taskContent = isEditing ? (
    <>
      <input
        value={task.title}
        onChange={(event) =>
          onChange({
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
        onChange={(e) => onChange({ ...task, done: e.target.checked })}
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </>
  );
}

import { useState } from "react";
import { TasksContext, useTask } from "../contexts/TaskContext";

export default function AddTask() {
  const [text, setText] = useState("");
  const { onAddTask } = useTask(TasksContext);
  return (
    <>
      <input
        type="text"
        placeholder="Add Task"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        onClick={() => {
          onAddTask(text);
          setText("");
        }}
      >
        Add
      </button>
    </>
  );
}

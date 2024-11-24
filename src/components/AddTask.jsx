import { useState } from "react";

export default function AddTask({ onAdd }) {
  const [text, setText] = useState("");
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
          onAdd(text);
          setText("");
        }}
      >
        Add
      </button>
    </>
  );
}

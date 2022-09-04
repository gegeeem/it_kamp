import { useState } from "react";
export default function AddTask({ addingTaskFunc }) {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        placeholder="Add task.."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          addingTaskFunc(text);
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
}

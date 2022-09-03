import { useState } from "react";
export default function AddTask() {
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
          console.log("uneli ste: ", text);
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
}

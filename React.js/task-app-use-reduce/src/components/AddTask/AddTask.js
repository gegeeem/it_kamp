import { toBeEnabled } from "@testing-library/jest-dom/dist/matchers";
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
      {text ? (
        <button
          disabled={false}
          onClick={() => {
            addingTaskFunc(text);
            setText("");
          }}
        >
          Add
        </button>
      ) : (
        <button disabled={true}>Add</button>
      )}
    </div>
  );
}

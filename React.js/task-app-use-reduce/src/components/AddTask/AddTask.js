import { useState } from "react";
export default function AddTask() {
  const [task, setTask] = useState("");
  return (
    <div>
      <input
        placeholder="Add task.."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={() => {
          console.log("uneli ste: ", task);
          setTask("");
        }}
      >
        Add
      </button>
    </div>
  );
}

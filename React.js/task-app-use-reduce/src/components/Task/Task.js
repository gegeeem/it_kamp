import { useState } from "react";

export default function ({ task, onDeleteTask, onEditTask }) {
  const [edit, setEdit] = useState(false);

  return (
    <>
      {edit === true ? (
        <>
          <input
            value={task.text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />{" "}
          <button
            onClick={(e) => {
              setText(e.target.value);
              setEdit(false);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <input
            type={"checkbox"}
            checked={checked}
            onChange={() => {
              setChecked((prev) => !prev);
            }}
          />
          {task}
          <button
            onClick={() => {
              setEdit(true);
            }}
          >
            {" "}
            Edit
          </button>
        </>
      )}
      <button onClick={onEditTask}>Delete</button>
    </>
  );
}

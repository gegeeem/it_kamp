import { useState } from "react";

export default function ({
  currentTask,
  onDeleteTask,
  onEditTask,
  isCheckedFunc,
}) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      {isEdit === true ? (
        <>
          <input value={currentTask.text} onChange={onEditTask} />{" "}
          <button
            onClick={() => {
              setIsEdit(false);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={currentTask.done}
            onChange={isCheckedFunc}
          />
          {currentTask.text}
          <button
            onClick={() => {
              setIsEdit(true);
            }}
          >
            {" "}
            Edit
          </button>
        </>
      )}
      <button onClick={onDeleteTask}>Delete</button>
    </>
  );
}

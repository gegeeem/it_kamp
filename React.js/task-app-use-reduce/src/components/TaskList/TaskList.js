import { useState } from "react";
import Task from "../Task/Task";

export default function TaskList({ task, onDeleteTask, onChangeTask }) {
  return (
    <ul>
      {task.map((el) => (
        <Task
          key={el.id}
          task={task}
          onEditTask={() => onChangeTask(el.id)}
          onDeleteTask={() => {
            onDeleteTask(el.id);
          }}
        />
      ))}
    </ul>
  );
}

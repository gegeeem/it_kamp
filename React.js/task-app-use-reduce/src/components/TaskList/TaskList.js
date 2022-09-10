import { useState } from "react";
import Task from "../Task/Task";
import { useReducer } from "react";

export default function TaskList({
  tasks,
  onDeleteTask,
  onChangeTask,
  isDoneTask,
}) {
  return (
    <ul>
      {tasks.map((el) => (
        <li key={el.id}>
          <Task
            currentTask={el}
            onEditTask={(e) => onChangeTask(el, e.target.value)}
            onDeleteTask={() => onDeleteTask(el.id)}
            isCheckedFunc={() => isDoneTask(el)}
          />
        </li>
      ))}
    </ul>
  );
}

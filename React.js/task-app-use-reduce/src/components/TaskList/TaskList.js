import { useState } from "react";
import Task from "../Task/Task";

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
            onEditTask={onChangeTask}
            onDeleteTask={onDeleteTask}
            isCheckedFunc={isDoneTask}
          />
        </li>
      ))}
    </ul>
  );
}

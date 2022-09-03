import { useState } from "react";
import TaskList from "../components/TaskList/TaskList";

export default function TaskApp() {
  const [tasks, setTask] = useState([
    {
      id: 0,
      text: "First wish",
      done: true,
    },
  ]);

  function handleAddTask(text) {
    setTask((prev) => {
      [
        ...prev,
        {
          id: nextId++,
          text: text,
          done: false,
        },
      ];
    });
  }
  function handleChangeTask(currentTask) {
    setTask(
      tasks.map((el) => {
        if (el.id === currentTask.id) {
          return currentTask;
        } else {
          return el;
        }
      })
    );
  }

  function handleDeleteTask(currentTask) {
    setTask(tasks.filter((el) => el !== currentTask.id));
  }

  return (
    <TaskList
      task={tasks}
      onChangeTask={handleChangeTask}
      onDeleteTask={handleDeleteTask}
    />
  );
}

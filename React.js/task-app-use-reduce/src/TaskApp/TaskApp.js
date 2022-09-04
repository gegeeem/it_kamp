import { useState } from "react";
import AddTask from "../components/AddTask/AddTask";
import TaskList from "../components/TaskList/TaskList";

let nextId = 2;
export default function TaskApp() {
  const [tasks, setTask] = useState([
    {
      id: 0,
      text: "First wish",
      done: true,
    },
    {
      id: 1,
      text: "Second ",
      done: false,
    },
  ]);

  function handleAddTask(text) {
    setTask((prev) => {
      return [
        ...prev,
        {
          id: nextId,
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
  console.log("TaskAp", tasks);
  return (
    <div>
      <AddTask addingTaskFunc={handleAddTask} />
      <TaskList
        task={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

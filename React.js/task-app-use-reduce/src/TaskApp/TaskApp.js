import { useReducer, useState } from "react";
import AddTask from "../components/AddTask/AddTask";
import TaskList from "../components/TaskList/TaskList";
import taskReducer from "../components/Reducer functions/tasksReducer";

let nextId = 2;
const initialTask = [
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
];
export default function TaskApp() {
  // const [tasks, setTask] = useState([
  //   {
  //     id: 0,
  //     text: "First wish",
  //     done: true,
  //   },
  //   {
  //     id: 1,
  //     text: "Second ",
  //     done: false,
  //   },
  // ]);

  // function handleAddTask(text) {
  //   setTask((prev) => {
  //     return [
  //       ...prev,
  //       {
  //         id: nextId++,
  //         text: text,
  //         done: false,
  //       },
  //     ];
  //   });
  // }
  const [tasks, dispatch] = useReducer(taskReducer, initialTask);

  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }
  // function handleChangeTask(currentTask, text) {
  //   setTask(
  //     tasks.map((el) => {
  //       if (el.id === currentTask.id) {
  //         currentTask = { ...el, text: text };
  //         return currentTask;
  //       } else {
  //         return el;
  //       }
  //     })
  //   );
  // }
  function handleChangeTask(currentTask, text) {
    dispatch({
      type: "changed",
      currentTask,
    });
  }
  // function handleIsCheckedTask(currentTask) {
  //   setTask(
  //     tasks.map((el) => {
  //       if (el.id === currentTask.id) {
  //         currentTask = { ...el, done: !el.done };
  //         return currentTask;
  //       } else {
  //         return el;
  //       }
  //     })
  //   );
  // }
  function handleIsCheckedTask(currentTask) {
    dispatch({
      type: "isCheckedDone",
      currentTask,
    });
  }

  // function handleDeleteTask(currentTaskId) {
  //   setTask(tasks.filter((el) => el.id !== currentTaskId));
  // }
  function handleDeleteTask(currentTaskId) {
    dispatch({
      type: "deleted",
      id: currentTaskId,
    });
  }
  return (
    <div>
      <AddTask addingTaskFunc={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
        isDoneTask={handleIsCheckedTask}
      />
    </div>
  );
}

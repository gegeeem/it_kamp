export default function taskReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.currentTask.id) {
          action.currentTask.text = action.text;
          return action;
        }
      });
    }
    case "isCheckedDone": {
      return tasks.map((el) => {
        if (el.id === action.currentTask.id) {
          action.currentTask.done = true;
          return action.currentTask;
        } else {
          return el;
        }
      });
    }
  }
}

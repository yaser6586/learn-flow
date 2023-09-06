import React, { createContext, useContext, useReducer } from "react";
const TaskContext = createContext();
const TaskDispatchContext = createContext();

export default function TaskProvider({ children }) {
  const [task, dispatch] = useReducer(taskReducer, initialValue);
  return (
    <TaskContext.Provider value={task}>
      <TaskDispatchContext.Provider value={dispatch}>
        <div className="todo">{children}</div>
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}
export function useTask() {
  return useContext(TaskContext);
}
export function useDispatch() {
  return useContext(TaskDispatchContext);
}

function taskReducer(tasks, action) {
  switch (action.type) {
    case "added":
      return [
        ...tasks,
        {
          text: action.text,
          id: action.id,
        },
      ];
    case "changed":
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    case "deleted":
      return tasks.filter((t) => t.id !== action.id);

    default:
      break;
  }
}
const initialValue = [
  { id: 0, text: "attend to meeting", done: false },
  { id: 1, text: "coding the new project", done: false },
  { id: 2, text: "watching better call saul series", done: false },
];

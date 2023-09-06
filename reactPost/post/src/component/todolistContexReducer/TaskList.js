import React, { useState } from "react";
import { useDispatch, useTask } from "./TaskProvider";

export default function TaskList() {
  const tasks = useTask();

  return (
    <ul>
      {tasks.map((task) => (
        <Task task={task} />
      ))}
    </ul>
  );
}

export function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  let TaskContent;
  const dispatch = useDispatch();
  if (isEditing) {
    TaskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) =>
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            })
          }
        />
        <button
          className="btn btn-success m-2 p-1"
          onClick={() => setIsEditing(false)}
        >
          save
        </button>
      </>
    );
  } else {
    TaskContent = (
      <>
        {task.text}
        <button
          className="btn btn-warning m-2 p-1"
          onClick={() => setIsEditing(true)}
        >
          edit
        </button>
        <button
          className="btn btn-danger m-2 p-1"
          onClick={() => {
            dispatch({
              type: "deleted",
              id: task.id,
            });
          }}
        >
          delete
        </button>
      </>
    );
  }
  return <li>{TaskContent}</li>;
}

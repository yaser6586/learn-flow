import React, { useState } from "react";
import { useDispatch, useTask } from "./TaskProvider";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const task = useTask();
  return (
    <div>
      <input
        value={task.text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        className="btn btn-info m-1 p-1"
        onClick={() => {
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        add todo
      </button>
    </div>
  );
}
let nextId = 3;

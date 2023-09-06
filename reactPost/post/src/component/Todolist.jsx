import React, { useState } from "react";

export default function Todolist() {
  const [todo, setTodo] = useState(initialTasks);
  const [task, setTask] = useState("");
  const [isEditing, setIsEdeiting] = useState(false);
  let tasks = "";
  if (!isEditing) {
    tasks = todo.map((td) => {
      return (
        <li key={td.id} className="tasks">
          {td.text}
          <button
            className="btn btn-info p-1 m-2"
            onClick={() => setIsEdeiting(true)}
          >
            edit
          </button>
          <button
            className="btn btn-danger p-1 m-2"
            // we need add handleDeleteTask function to another arrow function for adding td.id as parameter
            // because when we press delete button function should know delete only this li tag
            onClick={() => handleDeleteTask(td.id)}
          >
            delete
          </button>
        </li>
      );
    });
  } else {
    tasks = todo.map((td) => {
      return (
        <li key={td.id} className="tasks">
          {td.text}
          <input
            value={tasks.text}
            type="text"
            onChange={(e) =>
              handlePressEdit({
                ...task,
                text: e.target.value,
              })
            }
          />
          <button
            className="btn btn-info p-1 m-2"
            onClick={() => {
              setIsEdeiting(false);
            }}
          >
            save
          </button>
        </li>
      );
    });
  }
  function handleAddTask(e) {
    setTask(e.target.value);
  }
  function handleButtonClick() {
    setTodo([
      ...todo,
      {
        id: nextId++,
        text: task,
        done: false,
      },
    ]);
  }
  function handleDeleteTask(item) {
    setTodo(todo.filter((td) => td.id !== item));
  }
  function handlePressEdit(item) {
    setTodo(
      tasks.map((t) => {
        if (t.id === item.id) {
          return item;
        } else {
          return t;
        }
      })
    );
  }
  return (
    <>
      <input type="text" onChange={handleAddTask} />
      <button onClick={handleButtonClick}>add</button>
      <ul>{tasks}</ul>
    </>
  );
}
let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

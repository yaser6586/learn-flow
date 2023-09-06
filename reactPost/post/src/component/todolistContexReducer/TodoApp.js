import React from "react";
import TaskProvider from "./TaskProvider";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default function TodoApp() {
  return (
    <TaskProvider>
      <h3>TO-DO List</h3>
      <AddTask />
      <TaskList />
    </TaskProvider>
  );
}

import React from "react";
import AddToDo from "./AddToDo";

const TodoApp = () => {
  return (
    <div className="todo-container">
      <h2>Welcome to the ToDo Application</h2>
      <AddToDo />
    </div>
  );
};

export default TodoApp;

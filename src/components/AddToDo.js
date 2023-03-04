import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import TaskIndicator from "./TaskIndicator";

const getLocalTodoLists = () => {
  let list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const AddToDo = () => {
  const [todos, setTodos] = useState(getLocalTodoLists());
  const [inputData, setInputData] = useState({});

  const handleChange = (e) => {
    console.log(inputData);
    const name = e.target.name;
    let value = e.target.value;
    let payload = {
      ...inputData,
      [name]: value,
    };
    setInputData(payload);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todos);
    let payload = [
      ...todos,
      {
        id: uuid(),
        header: inputData.header,
        body: inputData.body,
      },
    ];
    setTodos(payload);
    setInputData({
      header: "",
      body: "",
    });
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <form className="m-4 align-items-center d-flex" onSubmit={handleSubmit}>
        <input
          required
          name="header"
          type="text"
          value={inputData.header}
          placeholder="Enter A Todo Header"
          className="me-3"
          onChange={handleChange}
        />
        <input
          type="text"
          name="body"
          value={inputData.body}
          required
          placeholder="Enter A Todo Body"
          className="me-3"
          onChange={handleChange}
        />
        <button className="btn btn-primary" type="submit">
          AddToDo
        </button>
      </form>
      <div className="todolist w-75">
        <ul className="list-group">
          {todos.map((todo) => {
            return (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={todo.id}
              >
                <span className="d-flex flex-column fw-bold">
                  {todo.header}
                  <span className="fw-normal">{todo.body}</span>
                </span>
                <div>
                  <button
                    className="border-0 bg-transparent"
                    onClick={() => handleDelete(todo.id)}
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    className="border-0 bg-transparent"
                    onClick={() => handleDelete(todo.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <TaskIndicator todos={todos} />
    </div>
  );
};

export default AddToDo;

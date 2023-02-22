import React from "react";

const TaskIndicator = ({ todos }) => {
  return (
    <div className="taskindicator border border-2  w-75 mt-3 d-flex justify-content-center w-100">
      <p className="text-center">
        You Have <span className="text-danger fw-bold">{todos.length}</span>{" "}
        Tasks Remaining
      </p>
    </div>
  );
};

export default TaskIndicator;

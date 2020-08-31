import React from "react";

const Todo = (props) => {
  console.log("todo props", props.task.id);
  return (
    <p
      onClick={() => props.completeTask(props.task.id)}
      className={`task${props.task.completed ? "completed" : ""}`}
    >
      {props.task.task}
    </p>
  );
};

export default Todo;

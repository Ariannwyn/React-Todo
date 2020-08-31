import React from "react";

const Todo = (props) => {
  console.log("todo props", props.task.id);
  return (
    <div className="task">
      <p
        onClick={() => props.completeTask(props.task.id)}
        className={`${props.task.completed ? "completed" : ""}`}
      >
        {props.task.task}
      </p>
    </div>
  );
};

export default Todo;

import React from "react";
import { Link } from "react-router-dom";

const ShowTodo = ({ todo }) => {
  const { task, _id } = todo;
  return (
    <div className="item">
      <div className="text">{task}</div>
      <div className="icons">
        <Link to={`/update/${(task, _id)}`}>
          <i class="ri-edit-2-fill"></i>
        </Link>
        <i class="ri-task-line"></i>
      </div>
    </div>
  );
};

export default ShowTodo;

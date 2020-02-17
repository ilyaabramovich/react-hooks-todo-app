import React from "react";
import "./Todo.css";

const Todo = ({ todo, onDelete }) => {
  const handleKeyDown = event => {
    if (event.key === "Delete") {
      onDelete(todo.id);
    }
  };

  const handleDeleteClick = () => {
    onDelete(todo.id);
  };

  return (
    <div className="todo" tabIndex="0" onKeyDown={handleKeyDown}>
      <p>{todo.text}</p>
      <button className="delete-button" onClick={handleDeleteClick}>
        X
      </button>
    </div>
  );
};

export default Todo;

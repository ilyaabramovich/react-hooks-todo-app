import React from "react";
import "./Todo.css";

export const Todo = ({ todo, onDelete }) => {
  console.log("here")
  const handleKeyDown = event => {
    if (event.key === "Delete") {
      onDelete(todo.id);
    }
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <div className="todo" tabIndex="0" onKeyDown={handleKeyDown}>
      <p className="todo-text">{todo.text}</p>
      <button className="delete-button" onClick={handleDelete}>
        X
      </button>
    </div>
  );
};
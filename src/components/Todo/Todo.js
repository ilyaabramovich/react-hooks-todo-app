import React, { memo } from "react";
import "./Todo.css";

export const Todo = memo(function Todo({ id, text, onDelete }) {
  const handleKeyDown = event => {
    if (event.key === "Delete") {
      onDelete(id);
    }
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li
      className="todo-item todo-list__item"
      tabIndex="0"
      onKeyDown={handleKeyDown}
    >
      <p className="todo-item__text">{text}</p>
      <button
        aria-label="Close"
        className="todo-item__button"
        onClick={handleDelete}
      >
        X
      </button>
    </li>
  );
});

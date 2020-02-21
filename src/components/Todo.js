import React from "react";
import "./Todo.css";

export const Todo = ({ todo, onDelete }) => {
  const handleKeyDown = event => {
    if (event.key === "Delete") {
      onDelete(todo.id);
    }
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <li
      className="todo-item todo-list__item"
      tabIndex="0"
      onKeyDown={handleKeyDown}
    >
      <p className="todo-item__text">{todo.text}</p>
      <button className="todo-item__button" onClick={handleDelete}>
        X
      </button>
    </li>
  );
};

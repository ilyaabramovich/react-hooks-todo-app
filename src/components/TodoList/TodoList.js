import React from "react";
import { Todo } from "../Todo";
import "./TodoList.css";

export const TodoList = ({ todos, onDelete }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onDelete={onDelete} />
    ))}
  </ul>
);

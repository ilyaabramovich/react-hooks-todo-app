import React from "react";
import { Todo } from "./Todo";

export const TodoList = ({ todos, onDelete }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <Todo key={todo.id} todo={todo} onDelete={onDelete} />
    ))}
  </ul>
);

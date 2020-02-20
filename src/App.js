import React, { useState, useEffect } from "react";
import { TodoList } from "./TodoList";
import "./App.css";
import { AddTodoForm } from "./AddTodoForm";
import { ToolBar } from "./ToolBar";

const App = () => {
  const initialTodos = () => JSON.parse(localStorage.getItem("todos")) || [];

  const [todos, setTodos] = useState(initialTodos);

  const handleSubmit = text => {
    setTodos([...todos, { text, id: Date.now() }]);
  };

  const handleDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleClear = () => {
    setTodos([]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    setTodos(todos);
  }, [todos]);

  return (
    <div className="container">
      <h1 className="header text-center">TODO</h1>
      {todos.length ? (
        <>
          <TodoList todos={todos} onDelete={handleDelete} />
          <ToolBar todos={todos} onClear={handleClear} />
        </>
      ) : (
        <p>You have no todos. Add some.</p>
      )}
      <AddTodoForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;

import React, { useCallback } from "react";
import { TodoList } from "../TodoList";
import { AddTodoForm } from "../AddTodoForm";
import { Toolbar } from "../Toolbar";
import { useLocalStorage } from "../../hooks";
import "./App.css";

export const App = () => {
  const [todos, setTodos] = useLocalStorage("todos");

  const handleSubmit = text => {
    setTodos([...todos, { text, id: Date.now() }]);
  };

  const handleDelete = useCallback(id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
    // eslint-disable-next-line
  }, []);

  const handleClear = () => {
    setTodos([]);
  };

  return (
    <div className="page">
      <header className="header page__header">
        <h1 className="header__text">TODO</h1>
      </header>
      <main className="page__main">
        {todos.length ? (
          <>
            <TodoList todos={todos} onDelete={handleDelete} />
            <Toolbar count={todos.length} onClear={handleClear} />
          </>
        ) : (
          <p className="page__paragraph">You have no todos. Add some.</p>
        )}
        <AddTodoForm onSubmit={handleSubmit} />
      </main>
    </div>
  );
};

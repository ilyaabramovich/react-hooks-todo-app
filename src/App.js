import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import "./App.css";

const App = () => {
  const initialTodos = () => JSON.parse(localStorage.getItem("todos")) || [];

  const [todos, setTodos] = useState(initialTodos);
  const [todo, setTodo] = useState("");

  const handleInputChange = event => {
    setTodo(event.target.value);
  };

  const onAddTodo = event => {
    event.preventDefault();
    setTodos([...todos, { text: todo, id: Date.now() }]);
    setTodo("");
  };

  const handleTodoDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    setTodos(todos);
  }, [todos]);
  return (
    <div className="container">
      <h1 className="header text-center">TODO</h1>
      <ul className="todo-list">
        {todos.length ? (
          todos.map(todo => (
            <li key={todo.id}>
              <Todo todo={todo} onDelete={handleTodoDelete} />
            </li>
          ))
        ) : (
          <p>You have no todos. Add some.</p>
        )}
      </ul>
      <form>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            value={todo}
            onChange={handleInputChange}
            placeholder="Enter new TODO"
          />
        </div>
        <button
          type="submit"
          disabled={!todo}
          className="submit-button"
          onClick={onAddTodo}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default App;

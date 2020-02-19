import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import "./App.css";

const App = () => {
  const initialTodos = () => JSON.parse(localStorage.getItem("todos")) || [];

  const [todos, setTodos] = useState(initialTodos);
  const [text, setText] = useState("");

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setTodos([...todos, { text, id: Date.now() }]);
    setText("");
  };

  const handleDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    setTodos(todos);
  }, [todos]);

  return (
    <div className="container">
      <h1 className="header text-center">TODO</h1>
        {todos.length ? (
      <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id}>
              <Todo todo={todo} onDelete={handleDelete} />
            </li>
          ))}
      </ul>
        ) : (
            <p>You have no todos. Add some.</p>
          )}
      <form>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Enter new TODO"
          />
        </div>
        <button
          type="submit"
          disabled={!text}
          className="submit-button"
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default App;

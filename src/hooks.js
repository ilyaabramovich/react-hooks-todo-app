import { useState, useEffect } from "react";

export function useLocalStorage(item) {
  const initialTodos = () => JSON.parse(localStorage.getItem(item)) || [];

  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem(item, JSON.stringify(todos));
    setTodos(todos);
  }, [todos, item]);

  return [todos, setTodos];
}

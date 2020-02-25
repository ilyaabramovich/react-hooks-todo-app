import { useState, useEffect } from "react";

export function useLocalStorage(item) {
  const initialItems = () => JSON.parse(localStorage.getItem(item)) || [];

  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    localStorage.setItem(item, JSON.stringify(items));
    setItems(items);
  }, [items, item]);

  return [items, setItems];
}

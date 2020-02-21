import React, { useState } from "react";
import "./AddTodoForm.css";

export const AddTodoForm = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(text);
    setText("");
  };

  return (
    <form className="add-todo-form">
      <div className="add-todo-form__control">
        <input
          autoFocus={true}
          className="input add-todo-form__input add-todo-form__input_fullwidth"
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Enter new TODO"
        />
      </div>
      <button
        type="submit"
        disabled={!text}
        className="button add-todo-form__button add-todo-form__button_fullwidth"
        onClick={handleSubmit}
      >
        Add
      </button>
    </form>
  );
};

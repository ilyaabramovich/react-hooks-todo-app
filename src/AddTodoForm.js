import React, { useState } from 'react'

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
        <form>
            <div className="form-group">
                <input
                    autoFocus={true}
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
    )
}

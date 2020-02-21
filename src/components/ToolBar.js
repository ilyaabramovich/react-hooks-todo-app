import React from "react";
import "./ToolBar.css";

export const ToolBar = ({ todos, onClear }) => {
  return (
    <div className="toolbar page__toolbar">
      <span>{`${todos.length} item${todos.length > 1 ? "s" : ""} left`}</span>
      <button className="button toolbar__button" onClick={onClear}>
        Clear all
      </button>
    </div>
  );
};

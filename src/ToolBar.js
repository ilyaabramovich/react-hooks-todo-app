import React from "react";
import "./ToolBar.css";

export const ToolBar = ({ todos, onClear }) => {
  return (
    <div className="toolbar">
      <span>{`${todos.length} item${todos.length > 1 ? "s" : ""} left`}</span>
      <button className="clear-button" onClick={onClear}>
        Clear all
      </button>
    </div>
  );
};

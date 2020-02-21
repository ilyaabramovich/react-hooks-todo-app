import React from "react";
import "./Toolbar.css";

export const Toolbar = ({ count, onClear }) => {
  return (
    <div className="toolbar page__toolbar">
      <span>{`${count} item${count > 1 ? "s" : ""} left`}</span>
      <button className="button toolbar__button" onClick={onClear}>
        Clear all
      </button>
    </div>
  );
};

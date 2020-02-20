import React from 'react'
import { Todo } from './Todo';
import "./TodoList.css"

export const TodoList = ({ todos, onDelete, onClear }) => <><ul className="todo-list">
    {todos.map(todo => (<li key={todo.id}>
        <Todo todo={todo} onDelete={onDelete} />
    </li>))}
</ul>
    {todos.length ? <div className="toolbar"><span classname="todo-count">{`${todos.length} item${todos.length > 1 ? "s" : ""} left`}</span><button className="clear-button" onClick={onClear}>Clear all</button></div> : null}

</>;        
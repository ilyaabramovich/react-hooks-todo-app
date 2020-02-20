import React from 'react'
import { Todo } from './Todo';


export const TodoList = ({ todos, onDelete }) => <ul className="todo-list">
    {todos.map(todo => (<li key={todo.id}>
        <Todo todo={todo} onDelete={onDelete} />
    </li>))}
</ul>;
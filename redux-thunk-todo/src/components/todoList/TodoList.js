import React from 'react';
import TodoItem from '../todoItem/TodoItem';
import './TodoList.css'

function TodoList({list, deleteTask, toggleTask}) {
    return (
        <ul>
            {list.map((todo) => 
            <TodoItem key={todo.id} 
                      todo={todo}
                      deleteTask={deleteTask}
                      toggleTask={toggleTask}
            />)}
        </ul>
    )
}

export default TodoList

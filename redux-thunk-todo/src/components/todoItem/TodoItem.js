import React from 'react';
import './TodoItem.css'

function TodoItem({todo, deleteTask, toggleTask}) {

    function onDeleteBtnClick(e) {
        e.stopPropagation();
        deleteTask(todo.id);
    }

    function onTodoClick() {
        // console.log(todo);
        const newTodo = {...todo};
        newTodo.isDone = !newTodo.isDone;
        // console.log(newTodo);
        toggleTask(newTodo);
    }

    return (
        <li className="todo-item"
            onClick={onTodoClick} 
            style={todo.isDone ? {background: 'green'} : {background: 'grey'}}
        >
            {todo.title}
            <span 
                className="delete-btn"
                onClick={onDeleteBtnClick}
            >X</span>
        </li>
    )
}



export default TodoItem

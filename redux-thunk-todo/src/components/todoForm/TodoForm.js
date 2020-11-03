import React, {useState} from 'react';
import './TodoForm.css';

function TodoForm({addTask}) {

    const initialState = {
        title: '',
        isDone: false
    }

    const [todo, setNewTodo] = useState(initialState)

    function onInputChange(e) {
        let newTodo = {...todo, [e.target.name]: e.target.value}
        setNewTodo(newTodo);
    }

    function onAddTask(e) {
        e.preventDefault();
        
        addTask(todo);
        setNewTodo(initialState);
    }


    return (
        <form className="form" onSubmit={onAddTask}>
            <input 
                type="text" 
                className="input"
                name="title" 
                value={todo.title}
                onChange={onInputChange}
            />
            <button 
                type="submit" 
                className="add-btn"
            >Add task</button>
        </form>
    )
}


export default TodoForm

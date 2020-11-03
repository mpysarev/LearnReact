import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import TodoForm from './components/todoForm/TodoForm';
import TodoList from './components/todoList/TodoList';
import { getTodos, 
         createTodo, 
         deleteTodo,
         toggleTodo } from './store/actions';
import './App.css'

function App({todoList, 
              getTodos, 
              createTodo, 
              deleteTodo, 
              toggleTodo}) {


  useEffect(() => {
    getTodos();
  }, [])

  function addNewTask(todo) {
    createTodo(todo);
  }

  function deleteTask(id) {
    deleteTodo(id)
  }

  function toggleTask (payload) {
    toggleTodo(payload);
  }

  return (
    <>
      <header 
        className="todo-header"
      >
        Redux/Thunk Todo List
      </header>
      <TodoForm addTask={addNewTask}/>
      <TodoList 
        list={todoList}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </>
  )
}

function mapStateToProps(state) {
  return {
    todoList: state.todoList
  }
}

const mapDispatchToProps = {
  getTodos,
  createTodo,
  deleteTodo,
  toggleTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

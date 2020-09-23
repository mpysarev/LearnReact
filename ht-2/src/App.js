import React, { Component } from 'react'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'


export default class App extends Component {
  state = {
    todoListItems: [
      {
        id: 1,
        title: 'Task 1',
        isDone: false
      },
      {
        id: 2,
        title: 'Task 2',
        isDone: true
      },
      {
        id: 3,
        title: 'Task 3',
        isDone: false
      }
    ]
  }

  toggleTodo = (id) => {
    this.setState({
      todoListItems: this.state.todoListItems.map((item) => {
        if(item.id !== id) return item
        return {...item, isDone: !item.isDone}
      })
    });
  }

  deleteTodo = (id) => {
    this.setState({
      todoListItems: this.state.todoListItems.filter((item) => {
        if(item.id !== id) return item
      })
    });
  }

  addTodo = (newTask) => {
    
    newTask.id = Date.now();
    
    const newList = [...this.state.todoListItems, newTask];
    
    this.setState({
      todoListItems: newList 
    })
    
  } 
  
  render() {
    return (
      <>
        <TodoList todos={this.state.todoListItems} 
                  onToggle={this.toggleTodo}
                  onDelete={this.deleteTodo}/>
        <TodoForm onAddBtn={this.addTodo}/>
      </>
    )
  }
}

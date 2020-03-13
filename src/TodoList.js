import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import uuid from 'uuid';
import './App.css';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';




class TodoList extends Component {
  idCount = 1;
  state = {
    todos: [
      {
        id: 0,
        title: 'Manage your tasks here',
        completed: false
      }      
    ]
  }

  // ToggleComplete
  addTodo = (title) => {
    const newTodo = {
      id: this.idCount,
      title: title,
      completed: false
    }
    this.idCount += 1
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  deleteTask = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  render() {
    console.log(this.state.todos)
    return (
        <React.Fragment>
            <AddTodo addTodo={this.addTodo} />
            <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTask={this.deleteTask} />
            
        </React.Fragment>

    );
  }
}

export default TodoList;
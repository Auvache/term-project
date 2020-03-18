import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import uuid from 'react-uuid';
import './App.css';
import Header from './components/layout/Header';
import About from './components/pages/About';
import TodoList from './TodoList';
import MemoryGame from './MemoryGame';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';




class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'do your homework',
        completed: false
      },
      {
        id: 2,
        title: 'go shopping',
        completed: false
      },
      {
        id: 3,
        title: 'take a nap',
        completed: false
      }      
    ]
  }

  // ToggleComplete
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
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
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" component={MemoryGame}/>
            <Route path="/about" component={About} />
            <Route path="/todo" component={TodoList} />
          </div>
        </div>
      </Router>

    );
  }
}

export default App;

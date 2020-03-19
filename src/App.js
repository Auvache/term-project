import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import About from './components/pages/About';
import TodoList from './TodoList';
import MemoryGame from './MemoryGame';

class App extends Component {

  render() {
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

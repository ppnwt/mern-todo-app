import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import CreateTodo from "./components/CreateTodo"
import EditTodo from "./components/EditTodo"
import TodoList from "./components/TodoList"

import logo from "./logo.svg"

function App() {
  return (
    <Router>
      <div className="container">
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="https://newhales.cc" target="_blank" rel="noopener noreferrer">
            <img src={logo} width="30" height="30" alt="Newhales Coding"></img>
          </a>
          <Link to="/" className="navbar-brand">MERN STACK Todo App</Link>
          <div className="collpase nav-collpase">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Todos</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Add new Todo</Link>
              </li>
            </ul>
          </div>
        </nav>

      <Route path="/" exact component={TodoList} />
      <Route path="/edit/:id" exact component={EditTodo} />
      <Route path="/create" exact component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;

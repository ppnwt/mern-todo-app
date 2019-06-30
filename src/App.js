import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import CreateTodo from "./components/CreateTodo"
import EditTodo from "./components/EditTodo"
import TodoList from "./components/TodoList"
import NavbarTodo from "./components/NavbarTodo"
import logo from "./alien.png"

function App() {
  return (
    <Router>
      <div className="container">
        
      <NavbarTodo logo={logo}></NavbarTodo>
      <Route path="/" exact component={TodoList} />
      <Route path="/todos" exact component={TodoList} />
      <Route path="/edit/:id" exact component={EditTodo} />
      <Route path="/create" exact component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;

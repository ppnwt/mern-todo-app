import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import React, {Component} from 'react';

export default class NavbarTodo extends Component {
  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="https://newhales.cc" target="_blank" rel="noopener noreferrer">
          <img src={this.props.logo} width="30" height="30" alt="Newhales Coding"></img>
        </a>
        <Link to="/todos" className="navbar-brand">TooDo App</Link>
        <div className="collpase nav-collpase">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/todos" className="nav-link">Todos</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Add new</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}


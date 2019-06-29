import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

const Todo = props => (
  <tr>
    <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_title}</td>
    <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
    <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
    <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
    <td>
      <Link to={"/edit/"+props.todo._id}>Edit</Link>
    </td>
  </tr>
)


export default class TodoList extends Component {
  _isMounted = false;
  constructor(props) {
    super(props)
    this.state = {
      todos: [], 
      scoopy: 'https://scoopy-do-backend.herokuapp.com/todos',
      scoopyAdd: 'https://scoopy-do-backend.herokuapp.com/todos/add',
    } 
  }

  componentDidMount() {
    this._isMounted = true;
    axios.get(this.state.scoopy || 'http://localhost:4000/todos/')
      .then(response => {
        this.setState({ todos: response.data })
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  componentWillUnmount(){
    this._isMounted = false;
  }

  componentDidUpdate() {
    axios.get(this.state.scoopy || 'http://localhost:4000/todos/')
      .then(response => {
        this.setState({ todos: response.data })
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  TodoList(){
    return this.state.todos.map(function(currentTodo, i) {
      return <Todo todo={currentTodo} key={i} />
    })
  }

  render(){
    return(
        <div>
          <h3>Todo Lists</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Responsible</th>
                <th>Priority</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { this.TodoList() }
            </tbody>
          </table>
        </div>
    ) 
  }
}
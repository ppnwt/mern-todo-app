import React, {Component} from 'react';
import axios from 'axios'

export default class EditTodo extends Component {

  constructor(props) {
    super(props)

    this.onChangeTodoTitle = this.onChangeTodoTitle.bind(this)
    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this)
    this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this)
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this)
    this.onchangeTodoCompleted = this.onchangeTodoCompleted.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      todoTitle: '',
      todoDescription: '',
      todoResponsible: '',
      todoPriority: '',
      todoCompleted: false
    }
  }

  componentDidMount(){
    axios.get('http://localhost:4000/todos/'+this.props.match.params.id)
      .then(response => {
          this.setState({
            todoTitle: response.data.todo_title,
            todoDescription: response.data.todo_description,
            todoResponsible: response.data.todo_responsible,
            todoPriority: response.data.todo_priority,
            todoCompleted: response.data.todo_completed          
          })
          console.log(response)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  onChangeTodoTitle(e) {
    this.setState({
      todoTitle: e.target.value
    })
  }

  onChangeTodoDescription(e) {
    this.setState({
      todoDescription: e.target.value
    })
  }

  onChangeTodoResponsible(e) {
    this.setState({
      todoResponsible: e.target.value
    })
  }

  onChangeTodoPriority(e) {
    this.setState({
      todoPriority: e.target.value
    })
  }

  onchangeTodoCompleted(e) {
    this.setState({
      todoCompleted: !this.state.todo_completed
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const object = {
      todo_title: this.state.todoTitle,
      todo_description: this.state.todoDescription,
      todo_responsible: this.state.todoResponsible,
      todo_priority: this.state.todoPriority,
      todo_completed: this.state.todoCompleted      
    }

    axios.post('http://localhost:4000/todos/update/'+this.props.match.params.id, object)
      .then(res => console.log(res.data))

    this.props.history.push('/')
  }

  render(){
    return(
        <div>
          <h3>Update Todo</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Title: </label>
              <input type="text"
                     className="form-control"
                     value={this.state.todoTitle}
                     onChange={this.onChangeTodoTitle} 
                     />
            </div>
            <div className="form-group">
              <label>Desctiption: </label>
              <input type="text"
                     className="form-control"
                     value={this.state.todoDescription}
                     onChange={this.onChangeTodoDescription} 
                     />
            </div>
            <div className="form-group">
              <label>Responsible: </label>
              <input type="text"
                     className="form-control"
                     value={this.state.todoResponsible}
                     onChange={this.onChangeTodoResponsible} 
                     />
            </div>
            <div className="form-group">
              <div className="form-check form-check-inline">
                <input type="radio" 
                      className="form-check-input" 
                      name="priorityOptions"
                      id="priorityLow"
                      value="Low"
                      checked={this.state.todoPriority === 'Low'}
                      onChange={this.onChangeTodoPriority}
                      />
                <label className="form-check-label">Low</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" 
                      className="form-check-input" 
                      name="priorityOptions"
                      id="priorityMedium"
                      value="Medium"
                      checked={this.state.todoPriority === 'Medium'}
                      onChange={this.onChangeTodoPriority}
                      />
                <label className="form-check-label">Medium</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" 
                      className="form-check-input" 
                      name="priorityOptions"
                      id="priorityHigh"
                      value="High"
                      checked={this.state.todoPriority === 'High'}
                      onChange={this.onChangeTodoPriority}
                      />
                <label className="form-check-label">High</label>
              </div>
              <div className="form-check">
                <input type="checkbox"
                      className="form-check-input"
                      id="completedCheckbox"
                      name="completedCheckbox"
                      onChange={this.onchangeTodoCompleted}
                      checked={this.state.todo_completed}
                      value={this.state.todo_completed}
                      />
                <label className="form-check-label">Completed</label>
              </div>
              <br/>
              <div className="form-group">
                <input type="submit" value="Update" className="btn btn-primary" />
              </div>
            </div>
          </form>
        </div>
    ) 
  }
}
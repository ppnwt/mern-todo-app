import React, {Component} from 'react';
import axios from 'axios'

export default class CreateTodo extends Component {

  constructor(props) {
    super(props);

    this.onChangeTodoTitle = this.onChangeTodoTitle.bind(this)
    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this)
    this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this)
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      todoTitle: '',
      todoDescription: '',
      todoResponsible: '',
      todoPriority: '',
      todoCompleted: false,
      scoopy: 'https://scoopy-do-backend.herokuapp.com/todos',
      scoopyAdd: 'https://scoopy-do-backend.herokuapp.com/todos/add'
    }
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

  onChangeTodoPriority(e) {
    this.setState({
      todoPriority: e.target.value
    })
  }


  onChangeTodoResponsible(e) {
    this.setState({
      todoResponsible: e.target.value
    })
  }


  onChangeTodoCompleted(e) {
    this.setState({
      todoCompleted: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(`Form submitted`)
    console.log(`Todo Description: ${this.state.todoTitle}`)
    console.log(`Todo Description: ${this.state.todoDescription}`)
    console.log(`Todo Responsible: ${this.state.todoResponsible}`)
    console.log(`Todo Priority: ${this.state.todoPriority}`)
    console.log(`Todo Completed: ${this.state.todoCompleted}`)

    const newTodo = {
      todo_title: this.state.todoTitle,
      todo_description: this.state.todoDescription,
      todo_responsible: this.state.todoResponsible,
      todo_priority: this.state.todoPriority,
      todo_completed: this.state.todoCompleted,
    }

    axios.post(this.state.scoopyAdd || 'http://localhost:4000/todos/add', newTodo)
      .then(res => console.log(res.data))

    this.setState({
      todoTitle: '',
      todoDescription: '',
      todoResponsible: '',
      todoPriority: '',
      todoCompleted: false
    })

    this.props.history.push('/')
  }

  render(){
    return(
        <div style={{marginTop: 20}}>
          <h3>Create New Todo</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label> Title: </label>
              <input type="text" 
                     className="form-control" 
                     value={this.state.todoTitle} 
                     onChange={this.onChangeTodoTitle}
                     />
            </div>
            <div className="form-group">
              <label> Description: </label>
              <input type="text" 
                     className="form-control" 
                     value={this.state.todoDescription} 
                     onChange={this.onChangeTodoDescription}
                     />
            </div>
            <div className="form-group">
              <label> Responsible: </label>
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
            </div>
            <div className="form-group">
              <input type="submit" value="Submit" className="btn btn-primary"/>
            </div>

          </form>
        </div>
    ) 
  }
}
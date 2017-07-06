import React, { Component } from 'react'
import TodoActions from '../../actions/TodoActions'
import './Todo.css'

class Todo extends Component {
  completeTodo (event) {
    event.preventDefault()
    TodoActions.completeTodo(this.props.id)
  }

  render () {
    return (
      <li className='todo'>
        {this.props.title} - {this.props.completed ? 'Done' : (
          <button onClick={this.completeTodo.bind(this)}>PENDING</button>
         )}
      </li>
    )
  }
}

export default Todo

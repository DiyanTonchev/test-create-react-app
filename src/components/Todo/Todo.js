import React, { Component } from 'react'

import TodoActions from '../../actions/TodoActions'
import './Todo.css'

class Todo extends Component {
  completeTodo = (event) => {
    event.preventDefault()
    TodoActions.completeTodo(this.props.id)
  }

  render () {
    const { title, completed } = this.props
    return (
      <li className='todo'>
        {title} - {completed ? 'Done' : (
          <button onClick={this.completeTodo}>PENDING</button>
         )}
      </li>
    )
  }
}

export default Todo

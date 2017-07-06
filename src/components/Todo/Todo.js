import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
  render () {
    return (
      <li className='todo'>
        {this.props.title} - {this.props.completed ? 'DONE' : 'PENDING'}
      </li>
    )
  }
}

export default Todo

import React, { Component } from 'react'
import Todo from './Todo'
import TodoStore from '../../stores/TodoStore'
import TodoActions from '../../actions/TodoActions'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      todos: []
    }

    TodoStore.on('change', () => {
      this.getAllTodos()
    })

    this.handleChange = this.handleChange.bind(this)
    this.createTodo = this.createTodo.bind(this)
  }

  getAllTodos () {
    TodoStore
      .getAll()
      .then(todos => this.setState({ todos }))
  }

  componentDidMount () {
    this.getAllTodos()
  }

  createTodo (event) {
    event.preventDefault()
    TodoActions.createTodo(this.state.title)
    this.setState({ title: '' })
  }

  handleChange (event) {
    this.setState({ title: event.target.value })
  }

  render () {
    const { todos } = this.state

    const todoElements = todos.map(todo => (
      <Todo key={todo.id} {...todo} />
    ))

    return (
      <div className='todo-wrapper'>
        <h3>My To-Do List</h3>
        <ul>{todoElements}</ul>
        <div>
          <input
            type='text'
            ref='title'
            value={this.state.title}
            onChange={this.handleChange} />
          <button onClick={this.createTodo}>Add</button>
        </div>
      </div>
    )
  }
}

export default TodoList

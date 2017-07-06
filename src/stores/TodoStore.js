import { EventEmitter } from 'events'
import Dispatcher from '../dispatcher'

class TodoStore extends EventEmitter {
  constructor () {
    super()

    this.todos = [
      { id: 1, title: 'Go shopping', completed: false },
      { id: 2, title: 'Go walking', completed: false }
    ]
  }

  createTodo (title) {
    const id = this.todos.length + 1
    this.todos.push({
      id,
      title,
      completed: false
    })

    this.emit('change')
  }

  completeTodo (id) {
    const todo = this.todos.find(todo => todo.id === id)
    todo.completed = true

    this.emit('change')
  }

  getAll () {
    return new Promise((resolve, reject) => {
      resolve(JSON.parse(JSON.stringify(this.todos)))
    })
  }

  handleAction (action) {
    switch (action.type) {
      case 'CREATE_TODO': {
        this.createTodo(action.title)
        break
      }
      case 'COMPLETE_TODO': {
        this.completeTodo(action.id)
        break
      }
      default: {
        throw new Error('Invalid action type.')
      }
    }
  }
}

let todoStore = new TodoStore()
Dispatcher.register(todoStore.handleAction.bind(todoStore))

export default todoStore

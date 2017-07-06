import dispatcher from '../dispatcher'

const createTodo = (title) => {
  dispatcher.dispatch({
    type: 'CREATE_TODO',
    title
  })
}

const completeTodo = (id) => {
  dispatcher.dispatch({
    type: 'COMPLETE_TODO',
    id
  })
}

const toDoActions = {
  createTodo,
  completeTodo
}

export default toDoActions

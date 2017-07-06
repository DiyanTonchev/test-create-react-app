import dispatcher from '../dispatcher'

let toDoActions = {
  createTodo: (title) => {
    dispatcher.dispatch({
      type: 'CREATE_TODO',
      title
    })
  }
}

export default toDoActions

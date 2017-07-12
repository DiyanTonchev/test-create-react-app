import React, { Component } from 'react'

import TodoList from '../Todo/TodoList'
import './Home.css'

class Home extends Component {
  render () {
    return (
      <div className='home-container'>
        <h2 className='home-title'>Hello, Manqk!</h2>
        <TodoList />
      </div>
    )
  }
}

export default Home

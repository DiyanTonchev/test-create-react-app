import React, { Component } from 'react'
import Header from './Header/Header'
import Routes from '../routes'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      title: 'Shano app!'
    }

    this.changeTitle = this.changeTitle.bind(this)
  }

  changeTitle (title) {
    this.setState({ title })
  }

  render () {
    return (
      <div>
        <Header changeTitle={this.changeTitle} title={this.state.title} />
        <main className='container'>
          <Routes />
        </main>
      </div>
    )
  }
}

export default Layout

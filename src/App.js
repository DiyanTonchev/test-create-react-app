import React, { Component } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Routes from './routes'
import './App.css'

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
      <div className='app'>
        <Header changeTitle={this.changeTitle} title={this.state.title} />
        <main className='container'>
          <Routes />
        </main>
        <Footer />
      </div>
    )
  }
}

export default Layout

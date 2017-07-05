import React, { Component } from 'react'
import logo from './logo.svg'
import './Header.css'

import Title from './Title.js'

class Header extends Component {
  handleChange (e) {
    const title = e.target.value
    this.props.changeTitle(title)
  }

  render () {
    return (
      <header className='app-header'>
        <img src={logo} className='app-logo' alt='logo' />
        <Title title={this.props.title} />
        <input value={this.props.title} onChange={this.handleChange.bind(this)} />
      </header>
    )
  }
}

export default Header

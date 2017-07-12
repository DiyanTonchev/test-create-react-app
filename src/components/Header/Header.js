import React, { Component } from 'react'

import Title from './Title.js'
import logo from './logo.svg'
import './Header.css'

class Header extends Component {
  handleChange = (e) => {
    const title = e.target.value
    this.props.changeTitle(title)
  }

  render () {
    return (
      <header className='app-header'>
        <img src={logo} className='app-logo' alt='logo' />
        <Title title={this.props.title} />
        <input value={this.props.title} onChange={this.handleChange} />
      </header>
    )
  }
}

export default Header

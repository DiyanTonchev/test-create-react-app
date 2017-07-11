import React, { Component } from 'react'
import './TextInput.css'

class TextInput extends Component {

  render () {
    return (
      <div className='input-wrapper'>
        <label htmlFor={this.props.id}>{this.props.placeholder}</label>
        <input
          type='text'
          className='text-input'
          id={this.props.id}
          name={this.props.id}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange} />
        <div className='error'>{this.props.error}</div>
      </div>
    )
  }
}

export default TextInput

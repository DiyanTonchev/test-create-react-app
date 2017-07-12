import React, { Component } from 'react'

import './TextInput.css'

class TextInput extends Component {

  render () {
    const {
      id,
      placeholder,
      value,
      onChange,
      error
    } = this.props
    return (
      <div className='input-wrapper'>
        <label htmlFor={id}>{placeholder}</label>
        <input
          type='text'
          className='text-input'
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange} />
        <div className='error'>{error}</div>
      </div>
    )
  }
}

export default TextInput

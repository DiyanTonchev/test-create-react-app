import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AuthorForm extends Component {
  render () {
    return (
      <form>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          id='firstName'
          name='firstName'
          value={this.props.author.firstName}
          onChange={this.props.handleInputChange} />
        <br />
        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          id='firstName'
          name='lastName'
          value={this.props.author.lastName}
          onChange={this.props.handleInputChange} />
        <br />
        <button onClick={this.props.submit}>{this.props.actionType}</button>
      </form>
    )
  }
}

AuthorForm.propTypes = {
  author: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }).isRequired,
  actionType: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
}

export default AuthorForm

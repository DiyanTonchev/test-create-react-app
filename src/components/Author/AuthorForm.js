import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextInput from '.././common/TextInput/TextInput'

class AuthorForm extends Component {

  render () {
    return (
      <form>
        <TextInput
          id='firstName'
          placeholder='First Name'
          value={this.props.author.firstName}
          onChange={this.props.handleInputChange} />
        <TextInput
          id='lastName'
          placeholder='Last Name'
          value={this.props.author.lastName}
          onChange={this.props.handleInputChange} />
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

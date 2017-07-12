import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TextInput from '.././common/TextInput/TextInput'

class AuthorForm extends Component {

  static propTypes = {
    author: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired
    }).isRequired,
    actionType: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired
  }

  render () {
    const {
      author,
      handleInputChange,
      submit,
      actionType,
    } = this.props

    return (
      <form>
        <TextInput
          id='firstName'
          placeholder='First Name'
          value={author.firstName}
          onChange={handleInputChange} />
        <TextInput
          id='lastName'
          placeholder='Last Name'
          value={author.lastName}
          onChange={handleInputChange} />
        <button onClick={submit}>{actionType}</button>
      </form>
    )
  }
}

export default AuthorForm

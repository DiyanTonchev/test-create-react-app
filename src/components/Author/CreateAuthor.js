import React, { Component } from 'react'
import AuthorForm from './AuthorForm'
import toastr from 'toastr'

import './Author.css'

class CreateAuthor extends Component {

  state = {
    author: {
      firstName: '',
      lastName: ''
    }
  }

  handleInputChange = (event) => {
    event.preventDefault()
    const target = event.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value
    let author = this.state.author
    author[name] = value

    this.setState({ author })
  }

  saveAuthor = (event) => {
    event.preventDefault()
    console.log(this.state.author)
    toastr.success('Author created successfully', 'Success')
  }

  render() {
    return (
      <AuthorForm
        author={this.state.author}
        handleInputChange={this.handleInputChange}
        actionType='Create Author'
        submit={this.saveAuthor}
      />
    )
  }
}

export default CreateAuthor

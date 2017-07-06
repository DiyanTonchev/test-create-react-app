import React, { Component } from 'react'
import AuthorForm from './AuthorForm'

class CreateAuthor extends Component {
  constructor (props) {
    super(props)

    this.state = {
      author: {
        firstName: '',
        lastName: ''
      }
    }
  }

  handleInputChange (event) {
    event.preventDefault()
    const target = event.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value
    let author = this.state.author
    author[name] = value

    this.setState({ author })
  }

  saveAuthor (event) {
    event.preventDefault()
    console.log(this.state.author)
  }

  render () {
    return (
      <AuthorForm
        author={this.state.author}
        handleInputChange={this.handleInputChange.bind(this)}
        actionType='Create Author'
        submit={this.saveAuthor.bind(this)}
      />
    )
  }
}

export default CreateAuthor

import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Redirect } from 'react-router-dom'
// import BookUpdate from './Update'
// import { Redirect } from 'react-router-dom'

class ImageUpdate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false,
      isUpdated: false,
      file: null,
      fileName: '',
      description: '',
      tag: '',
      owner: '',
      id: this.props.id,
      createdUserImageId: null,
      token: this.props.user.token
    } // this.state
  } // constructor
  componentDidMount () {
    axios({
      url: `${apiUrl}/userImages/` + this.props.id,
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + `${this.state.token}`
      }
    })
      .then(response => {
        console.log(response.data)
        this.setState({
          isLoaded: true,
          file: null,
          fileName: response.data.userImages.fileName,
          description: response.data.userImages.description,
          tag: response.data.userImages.tag,
          owner: response.data.userImages.owner
        })
      })
      .catch(console.error)
  }
  onDescriptionChangeHandler = (event) => {
    const userInput = event.target.value
    // const userImageCopy = Object.assign({}, this.state.userImage)
    // userImageCopy.description = userInput
    this.setState({
      // userImage: userImageCopy
      description: userInput
    })
  }
  onTagChangeHandler = (event) => {
    const userInput = event.target.value
    // const userImageCopy = Object.assign({}, this.state.userImage)
    // userImageCopy.tag = userInput
    this.setState({
      // userImage: userImageCopy
      tag: userInput
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    // make a POST request to API /books route with book data
    axios({
      url: `${apiUrl}/userImages/${this.state.id}`,
      method: 'PATCH',
      headers: { 'Authorization': `Bearer ${this.state.token}` },
      data: {
        userImage: {
          fileName: this.state.fileName,
          tag: this.state.tag,
          description: this.state.description
        }
      }
    })
      .then(response => this.setState({ isUpdated: true }))
      .catch(console.error)
  }

  render () {
    if (this.state.isUpdated) {
      return <Redirect to ={`/image-profile/${this.state.id}`} />
    }
    let jsx
    // while the book is loading
    if (this.state.isLoaded === false) {
      jsx = <p>Loading...</p>
      // when the request is complete
    } else {
      jsx = (
        <div>
          <h2>Update your Post</h2>
          <form onSubmit={this.handleSubmit}>
            <input name="description" type="text" value={this.state.description} onChange={this.onDescriptionChangeHandler}/>
            <input name="tag" type="text" value={this.state.tag} onChange={this.onTagChangeHandler}/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      )
    }
    return (
      <div>
        <h2>Update Post Page</h2>
        {jsx}
      </div>
    )
  }
}

export default ImageUpdate

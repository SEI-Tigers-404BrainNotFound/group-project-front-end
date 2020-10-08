import React from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
// import { Redirect } from 'react-router-dom'
// import awsSdk from '../../api/dist/aws-sdk.min'
class UploadImage extends React.Component {
  constructor (props) {
    super(props)
    console.log(this.props.user)
    this.state = {
      userImage: {
        file: null,
        fileName: '',
        description: '',
        tag: '',
        owner: ''
      },
      createdUserImageId: null,
      token: this.props.user.token
    }
  }
  onDescriptionChangeHandler = (event) => {
    const userInput = event.target.value
    const userImageCopy = Object.assign({}, this.state.userImage)
    userImageCopy.description = userInput
    this.setState({
      userImage: userImageCopy
    })
  }

  onTagChangeHandler = (event) => {
    const userInput = event.target.value
    const userImageCopy = Object.assign({}, this.state.userImage)
    userImageCopy.tag = userInput
    this.setState({
      userImage: userImageCopy
    })
  }

  onImageChangeHandler = (event) => {
    const userInput = event.target.files[0].name
    const userFile = event.target.files[0]
    const userImageCopy = Object.assign({}, this.state.userImage)
    userImageCopy.fileName = userInput
    userImageCopy.file = userFile
    this.setState({
      userImage: userImageCopy
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const userImage = this.state.userImage
    axios({
      url: `${apiUrl}/userImages`,
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + `${this.state.token}`
      },
      data: {
        userImage: userImage
      }
    })
      .then((response) => this.setState({
        createdUserImageId: response.data.userImage._id
      })
      )
  }
  render () {
    // const file = document.getElementById("photoupload").files[0]
    // if (this.state.createdUserImageId !== '') {
    //   return <Redirect to='/userImage' />
    // }
    return (
      <div>
        <h3>Upload an image</h3>
        <form onSubmit={this.handleSubmit}>
          <input name="fileName" id="photoupload" onChange={this.onImageChangeHandler} type="file" accept="image/*" />
          <input name="description" placeholder="Description" type="text" value={this.state.userImage.description} onChange={this.onDescriptionChangeHandler}/>
          <input name="tag" type="text" placeholder="tag" value={this.state.userImage.tag} onChange={this.onTagChangeHandler}/>
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}
export default UploadImage

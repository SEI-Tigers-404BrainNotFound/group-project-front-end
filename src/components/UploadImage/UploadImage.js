import React from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import messages from '../AutoDismissAlert/messages'

class UploadImage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // userImage: {
      file: null,
      fileName: '',
      description: '',
      tag: '',
      owner: '',
      // },
      createdUserImageId: null,
      token: this.props.user.token
    }
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

  onImageChangeHandler = (event) => {
    const userInput = event.target.files[0].name
    const userFile = event.target.files[0]
    // const userImageCopy = Object.assign({}, this.state.userImage)
    // userImageCopy.fileName = userInput
    // userImageCopy.file = userFile
    this.setState({
      // userImage: userImageCopy
      file: userFile,
      fileName: userInput
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { msgAlert, history } = this.props
    const data = new FormData()
    data.append('photoupload', this.state.file)
    data.append('filename', this.state.fileName)
    data.append('tag', this.state.tag)
    data.append('description', this.state.description)
    // const userImage = this.state.userImage
    axios({
      url: `${apiUrl}/userImages/Image`,
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + `${this.state.token}`
      },
      data: data
    })
      .then((response) => this.setState({
        createdUserImageId: response.data.userImage._id
      })
      )
      .then(() => msgAlert({
        heading: 'Upload Image Success',
        message: messages.uploadImageSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/user-profile'))
      .catch(error => {
        this.setState({ fileName: '', description: '', tag: '' })
        msgAlert({
          heading: 'Could not upload the image, failed with error: ' + error.messages,
          message: messages.uploadImageFailure,
          variant: 'danger'
        })
      })
  }
  render () {
    // const file = document.getElementById("photoupload").files[0]
    // if (this.state.createdUserImageId !== '') {
    //   return <Redirect to='/userImage' />
    // }
    return (
      <div>
        <h3>Upload an image</h3>
        <Form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <Form.Control name="photoupload" id="photoupload" onChange={this.onImageChangeHandler} type="file" accept="image/*" />
          <Form.Control name="description" placeholder="Description" type="text" value={this.state.description} onChange={this.onDescriptionChangeHandler}/>
          <Form.Control name="tag" type="text" placeholder="tag" value={this.state.tag} onChange={this.onTagChangeHandler}/>
          <Button variant='primary' type="submit"> Submit </Button>
        </Form>
      </div>
    )
  }
}
export default withRouter(UploadImage)

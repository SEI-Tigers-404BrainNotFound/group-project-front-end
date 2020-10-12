import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import messages from '../AutoDismissAlert/messages'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import DateTimeDisplay from './../DateTimeDisplay/DateTimeDisplay'

class ImageProfile extends Component {
  constructor (props) {
    super(props)
    this.tempDescription = ''
    this.tempTag = ''
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
      token: this.props.user.token,
      createdAt: null
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
        this.setState({
          isLoaded: true,
          file: null,
          fileName: response.data.userImages.fileName,
          description: response.data.userImages.description,
          tag: response.data.userImages.tag,
          owner: response.data.userImages.owner,
          formShown: false,
          tempDescription: null,
          createdAt: response.data.userImages.createdAt,
          updatedAt: response.data.userImages.updatedAt
        })
      })
      .catch(console.error)
  }

  onEditButtonClick = () => {
    this.setState({ formShown: true })
    this.tempDescription = this.state.description
    this.tempTag = this.state.tag
  }
  onCancelButtonClick = () => {
    this.setState({ formShown: false, description: this.tempDescription, tag: this.tempTag })
  }

  handleDelete = () => {
    const { msgAlert, history } = this.props
    const userId = this.state.id
    axios({
      url: `${apiUrl}/userImages/${userId}`,
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + `${this.state.token}`
      }
    })
      .then(response => this.setState({ userImageId: this.state.createdUserImageId }))
      .then(() => msgAlert({
        heading: 'Successfully Deleted an Image',
        message: messages.deleteImageSuccess,
        variant: 'success'
      }))
      .then(history.push('/user-profile'))
      .catch(error => {
        this.setState({ fileName: '', description: '', tag: '' })
        msgAlert({
          heading: 'Could not delete the image, failed with error: ' + error.messages,
          message: messages.deleteImageFailure,
          variant: 'danger'
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
    const { msgAlert } = this.props
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
      .then(response => {
        console.log(response)
        this.setState({ isUpdated: true, formShown: false })
      })
      .then(() => msgAlert({
        heading: 'Successfully Updated an Image',
        message: messages.updateImageSuccess,
        variant: 'success'
      }))
      .catch(error => {
        this.setState({ fileName: '', description: '', tag: '' })
        msgAlert({
          heading: 'Could not update the image, failed with error: ' + error.messages,
          message: messages.updateImageFailure,
          variant: 'danger'
        })
      })
      .catch(console.error)
  }

  render () {
    let jsx
    // while the book is loading
    if (this.state.isLoaded === false) {
      jsx = <p>Loading...</p>
      // when the request is complete
    } else {
      const url = 'https://404brainnotfound.s3.amazonaws.com/'
      jsx = (
        <div className="image-profile-container">
          <div>
            <Card style={{ width: '24rem' }} >
              <div className="pt-2 pr-2 pl-2 pb-2 mb-0 bg-gradient-primary text-white">
                <Card.Header>{this.state.owner.email}</Card.Header>
                <div className="bg-gradient-dark">
                  <Card.Img variant="top" src={url + this.state.fileName} />
                  <Card.Body>
                    {!this.state.formShown &&
                    <div>
                      <Card.Title>{this.state.description}</Card.Title>
                      <Card.Text>Tag: &nbsp;
                        {this.state.tag}
                      </Card.Text>
                    </div>
                    }
                    {this.state.formShown &&
                      <form onSubmit={this.handleSubmit}>
                        <Card.Text>
                          <input name="description" type="text" value={this.state.description} onChange={this.onDescriptionChangeHandler}/>
                        </Card.Text>
                        <Card.Text>
                          <input name="tag" type="text" value={this.state.tag} onChange={this.onTagChangeHandler}/>
                          <input type="submit" value="Submit" />
                          <input type="button" value="Cancel" onClick={this.onCancelButtonClick}/>
                        </Card.Text>
                      </form>
                    }
                    <Card.Text>
                    Created on: &nbsp;
                      <DateTimeDisplay dateTimeString={this.state.createdAt}></DateTimeDisplay>
                    </Card.Text>
                    <Card.Text>
                    Updated on: &nbsp;
                      <DateTimeDisplay dateTimeString={this.state.updatedAt}></DateTimeDisplay>
                    </Card.Text>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </div>
          <ul>
            <Button variant="primary" type="button" onClick={this.handleDelete}>Delete</Button>
            {/* <Link to={`/image-update/${this.state.id}`}> */}
            <Button variant="primary" type="button" onClick={this.onEditButtonClick}>Edit</Button>
          </ul>
        </div>
      )
    }
    return (
      <div>
        <h2>Image Page</h2>
        {jsx}
      </div>
    )
  }
}

export default ImageProfile

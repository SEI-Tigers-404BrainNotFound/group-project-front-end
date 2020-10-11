import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Redirect, withRouter } from 'react-router-dom'
import messages from '../AutoDismissAlert/messages'
import Card from 'react-bootstrap/Card'
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
      url: `${apiUrl}/userImages/` + this.state.id,
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
    const { msgAlert, history } = this.props
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
      .then(() => history.push('/image-profile/' + this.state.id))
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
    if (this.state.isUpdated) {
      return <Redirect to ={`/image-profile/${this.state.id}`} />
    }
    let jsx
    const url = 'https://404brainnotfound.s3.amazonaws.com/'
    // while the book is loading
    if (this.state.isLoaded === false) {
      jsx = <p>Loading...</p>
      // when the request is complete
    } else {
      jsx = (
        <div>
          <div className="image-profile-container">
            <div>
              <Card style={{ width: '24rem' }} >
                <div className="pt-2 pr-2 pl-2 pb-2 mb-0 bg-gradient-primary text-white">
                  <Card.Header>{this.state.owner.email}</Card.Header>
                  <div className="bg-gradient-dark">
                    <Card.Img variant="top" src={url + this.state.fileName} />
                    <Card.Body>
                      <form onSubmit={this.handleSubmit}>
                        <Card.Text><input name="description" type="text" value={this.state.description} onChange={this.onDescriptionChangeHandler}/></Card.Text>
                        <Card.Text>
                          <input name="tag" type="text" value={this.state.tag} onChange={this.onTagChangeHandler}/>
                          <input type="submit" value="Submit" />
                        </Card.Text>
                      </form>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </div>
          </div>
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

export default withRouter(ImageUpdate)

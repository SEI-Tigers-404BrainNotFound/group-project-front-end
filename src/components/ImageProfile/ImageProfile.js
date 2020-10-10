import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import messages from '../AutoDismissAlert/messages'
// import { Link } from 'react-router-dom'
// import BookUpdate from './Update'
// import { Redirect } from 'react-router-dom'
import { withRouter, Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class ImageProfile extends Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.state = {
      isLoaded: false,
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
  handleDelete = (event) => {
    event.preventDefault()
    const { msgAlert, history } = this.props
    const userId = this.state.id
    // make a POST request to API /books route with book data
    axios({
      url: `${apiUrl}/userImages/${userId}`,
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + `${this.state.token}`
      }
    })
      .then(response => this.setState({ userImageId: this.state.createdUserImageId }))
      .then(() => history.push('/user-profile'))
      .then(() => msgAlert({
        heading: 'Successfully Deleted an Image',
        message: messages.deleteImageSuccess,
        variant: 'success'
      }))
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
  // handleUpdate = () => {
  //   event.preventDefault()
  //   <Redirect to={`/image-update/${this.state.id}`} />
  // }

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
                    <Card.Title>{this.state.description}</Card.Title>
                    <Card.Text>
                      {this.state.tag}
                    </Card.Text>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </div>
          <ul>
            <Button variant="primary" type="submit" onClick={this.handleDelete}>Delete</Button>
            <Link to={`/image-update/${this.state.id}`}><Button variant="primary" type="submit" onClick={console.log('this works')}>Edit</Button>
            </Link>
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

export default withRouter(ImageProfile)

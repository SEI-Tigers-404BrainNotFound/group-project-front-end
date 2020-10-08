import React from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'

class ProfileIndex extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false,
      userImages: [],
      token: this.props.user.token
    } // this.state
  } // constructor
  componentDidMount () {
    console.log(this.state.token)
    axios({
      url: `${apiUrl}/userImages`,
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + `${this.state.token}`
      }
    })
      .then(response => {
        console.log(response.data.userImages)
        this.setState({
          isLoaded: true,
          userImages: response.data.userImages
        })
      })
      .catch(console.error)
  } // componentDidMount
  render () {
    console.log(this.props)
    let jsx
    // while the books are loading
    if (this.state.isLoaded === false) {
      jsx = <p>Loading...</p>
      // if no books
    } else if (this.state.userImages.length === 0) {
      jsx = <p>No images, please add one. </p>
      // when the request is complete
    } else {
      const url = 'https://404brainnotfound.s3.amazonaws.com/'
      jsx = (
        <div>
          {this.state.userImages.map(userImage => {
            return <Col key={userImage._id} size="4" className="grid"><Link to={`/userImages/${userImage._id}`}>
              <Image className="image" variant="top" src={url + userImage.fileName} />
            </Link>
            </Col>
          })}
        </div>
      )
    }
    return (
      <div>
        <h2>Profile</h2>
        {jsx}
      </div>
    )
  } // render
} // BooksIndex
export default ProfileIndex

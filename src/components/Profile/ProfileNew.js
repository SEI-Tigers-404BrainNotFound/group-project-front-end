import React from 'react'
import axios from 'axios'
import apiUrl from '../apiConfig'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'

class ProfileIndex extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false,
      userImages: []
    } // this.state
  } // constructor
  componentDidMount () {
    axios.get(apiUrl + '/userImages')
      .then(response => {
        this.setState({
          isLoaded: true,
          userImages: response.data.userImages
        })
      })
      .catch(console.error)
  } // componentDidMount
  render () {
    let jsx
    // while the books are loading
    if (this.state.isLoaded === false) {
      jsx = <p>Loading...</p>
      // if no books
    } else if (this.state.userImages.length === 0) {
      jsx = <p>No books, please add one. </p>
      // when the request is complete
    } else {
      jsx = (
        <div>
          {this.state.userImages.map(userImage => {
            return <Col key={userImage._id} size="4" className="grid"><Link to={`/userImages/${userImage._id}`}>
              <Image className="image" variant="top" src="https://i.imgur.com/8whqMYk.jpg" />
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

import React from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
// import Col from 'react-bootstrap/Col'
// import Image from 'react-bootstrap/Image'
// import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import DateTimeDisplay from './../DateTimeDisplay/DateTimeDisplay'

class NewsFeed extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.state = {
      isLoaded: false,
      userImages: [],
      token: this.props.user.token
    } // this.state
  } // constructor
  componentDidMount () {
    console.log(this.state.token)
    axios({
      url: `${apiUrl}/userImages/orderdByDateDesc`,
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
        <div className="newsFeed">
          {this.state.userImages.map(userImage => {
            return <Card key={userImage._id} style={{ width: '24rem' }} className="cards">
              <div className="pt-2 pr-2 pl-2 pb-2 mb-0 bg-gradient-primary text-white">
                <Card.Header>{userImage.owner.email}</Card.Header>
                <div className="bg-gradient-dark">
                  <Card.Img variant="top" src={url + userImage.fileName} />
                  <Card.Body>
                    <Card.Title>{userImage.description}</Card.Title>
                    <Card.Text>
                      {userImage.tag}
                    </Card.Text>
                    <Card.Text>
                      <DateTimeDisplay dateTimeString={userImage.createdAt}></DateTimeDisplay>
                    </Card.Text>
                  </Card.Body>
                </div>
              </div>
            </Card>
          })}
        </div>
      )
    }
    return (
      <div className="newsFeed">
        <h2>News Feed</h2>
        {jsx}
      </div>
    )
  }
}

export default NewsFeed

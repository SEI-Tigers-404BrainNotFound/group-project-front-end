import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

class NewsFeed extends React.Component {
  constructor (props, user) {
    super(props)
    this.state = user
  }
  render () {
    console.log(this.props.user)
    return (
      <div>
        <Card style={{ width: '24rem' }} >
          <div className="pt-2 pr-2 pl-2 pb-2 mb-0 bg-gradient-primary text-white">
            <Card.Header><Link className="linkIt"to={'/user-profile'}>{this.props.user.email}</Link></Card.Header>
            <div className="bg-gradient-dark">
              <Card.Img variant="top" src="https://i.imgur.com/8whqMYk.jpg" />
              <Card.Body>
                <Card.Title>Kruger Character</Card.Title>
                <Card.Text>
              This is a popular Character from a video game Call of Duty
                </Card.Text>
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
    )
  }
}

export default NewsFeed

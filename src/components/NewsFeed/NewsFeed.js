import React from 'react'
import Card from 'react-bootstrap/Card'

class NewsFeed extends React.Component {
  constructor ({ user }) {
    super()
    this.state = user
  }
  render () {
    return (
      <div>
        <Card style={{ width: '24rem' }} >
          <div className="pt-4 pr-2 pl-2 pb-2 mb-0 bg-gradient-primary text-white">
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

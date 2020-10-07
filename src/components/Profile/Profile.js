import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardGroup'

class Profile extends React.Component {
  constructor ({ user }) {
    super()
    this.state = user
  }
  render () {
    return (
      <div>
        <h2>This is the Profile</h2>
        <CardDeck>
          <Card style={{ height: '180px' }} size="4">
            <div className="bg-gradient-primary">
              <div className="bg-gradient-dark">
                <Card.Img variant="top" src="https://i.imgur.com/8whqMYk.jpg" />
              </div>
            </div>
          </Card>
          <Card style={{ height: '180px' }} size="4">
            <div className="bg-gradient-primary text-white">
              <div className="bg-gradient-dark">
                <Card.Img variant="top" src="https://i.imgur.com/cbMvql7.jpg" />
              </div>
            </div>
          </Card>
          <Card style={{ height: '180px' }} size="4">
            <div className="bg-gradient-primary text-white">
              <div className="bg-gradient-dark">
                <Card.Img variant="top" src="https://i.imgur.com/PoinHxt.jpg" />
              </div>
            </div>
          </Card>
        </CardDeck>
        <div row="4"></div>
        <CardDeck>
          <Card style={{ height: '180px' }} size="4">
            <div className="bg-gradient-primary text-white">
              <div className="bg-gradient-dark">
                <Card.Img variant="top" src="https://i.imgur.com/8whqMYk.jpg" />
              </div>
            </div>
          </Card>
          <Card style={{ height: '180px' }} size="4">
            <div className="bg-gradient-primary text-white">
              <div className="bg-gradient-dark">
                <Card.Img variant="top" src="https://i.imgur.com/8whqMYk.jpg" />
              </div>
            </div>
          </Card>
          <Card style={{ height: '180px' }} size="4">
            <div className="bg-gradient-primary text-white">
              <div className="bg-gradient-dark">
                <Card.Img variant="top" src="https://i.imgur.com/8whqMYk.jpg" />
              </div>
            </div>
          </Card>
        </CardDeck>
      </div>
    )
  }
}

export default Profile

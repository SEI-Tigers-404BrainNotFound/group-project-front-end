import React from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class Profile extends React.Component {
  constructor ({ user }) {
    super()
    this.state = user
  }
  render () {
    return (
      <div>
        <h2>This is the Profile</h2>
        <Container>
          <Row>
            <Col size="4" className="grid">
              <Image className="image" variant="top" src="https://i.imgur.com/8whqMYk.jpg" thumbnail />
            </Col>
            <Col size="4" className="grid">
              <Image className="image" variant="top" src="https://i.imgur.com/cbMvql7.jpg" thumbnail />
            </Col>
            <Col size="4" className="grid">
              <Image className="image" variant="top" src="https://i.imgur.com/PoinHxt.jpg" thumbnail />
            </Col>
          </Row>
          <Row>
            <Col size="4" className="grid">
              <Image className="image" variant="top" src="https://i.imgur.com/8whqMYk.jpg" thumbnail />
            </Col>
            <Col size="4" className="grid">
              <Image className="image" variant="top" src="https://i.imgur.com/8whqMYk.jpg" thumbnail />
            </Col>
            <Col size="4" className="grid">
              <Image className="image" variant="top" src="https://i.imgur.com/8whqMYk.jpg" thumbnail />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Profile

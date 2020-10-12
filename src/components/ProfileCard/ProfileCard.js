import React from 'react'
import axios from 'axios'
import apiUrl from '../apiConfig'
import Card from 'react-bootstrap/Card'

class ProfileCard extends React.Component {
  constructor ({ user }) {
    super()
    this.state = {
      fileName: '',
      description: '',
      owner: '',
      tag: '',
      title: ''
    }
  }
  componentDidMount () {
    axios.get(`${apiUrl}` + `/userImage/${this.props.match.params._id}`)

      .then(response => {
        this.setState({
          fileName: response.data.userImage.fileName,
          description: response.data.userImage.description,
          tag: response.data.userImage.tag,
          owner: response.data.userImage.owner,
          title: response.data.userImage.owner
        })
      })
      .catch(console.error)
  }
  render () {
    return (
      <div>
        <Card style={{ width: '24rem' }} >
          <div className="pt-2 pr-2 pl-2 pb-2 mb-0 bg-gradient-primary text-white">
            <Card.Header>{this.state.owner}</Card.Header>
            <div className="bg-gradient-dark">
              <Card.Img variant="top" src={this.state.fileName} />
              <Card.Body>
                <Card.Title>{this.state.title}</Card.Title>
                <Card.Text>
                  {this.state.description}
                </Card.Text>
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
    )
  }
}

export default ProfileCard

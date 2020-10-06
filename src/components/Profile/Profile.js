import React from 'react'

class Profile extends React.Component {
  constructor ({ user }) {
    super()
    this.state = user
  }
  render () {
    return (
      <div>
        <h1>This is the Profile</h1>
      </div>
    )
  }
}

export default Profile

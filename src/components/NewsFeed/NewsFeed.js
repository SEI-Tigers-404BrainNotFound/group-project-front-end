import React from 'react'

class NewsFeed extends React.Component {
  constructor ({ user }) {
    super()
    this.state = user
  }
  render () {
    return (
      <div>
        <h1>This is the NewsFeed</h1>
      </div>
    )
  }
}

export default NewsFeed

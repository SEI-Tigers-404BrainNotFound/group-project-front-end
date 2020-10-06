import React from 'react'

class UploadImage extends React.Component {
  constructor ({ user }) {
    super()
    this.state = user
  }
  render () {
    return (
      <div>
        <h1>This is where to upload an image</h1>
      </div>
    )
  }
}

export default UploadImage

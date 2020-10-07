import React from 'react'
import axios from 'axios'
// import awsSdk from '../../api/dist/aws-sdk.min'
class UploadImage extends React.Component {
  constructor ({ user }) {
    super()
    this.state = user
  }
  handleUploadFile = (event) => {
    const data = {
      'userImage':
      {
        'file': event.target.files[0],
        'fileName': event.target.files[0].name,
        'tag': 'testTag',
        'description': 'testDescription'
      }
    }
    axios.post('/userImages', data).then((response) => {

    })
  }
  render () {
    // const file = document.getElementById("photoupload").files[0]
    return (
      <div>
        <h3>This is where to upload an image</h3>
        <input id="photoupload" onChange={this.handleUploadFile} type="file" accept="image/*" />
      </div>
    )
  }
}
export default UploadImage

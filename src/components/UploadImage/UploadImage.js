import React from 'react'
// import awsSdk from '../../api/dist/aws-sdk.min'
class UploadImage extends React.Component {
  constructor ({ user }) {
    super()
    this.state = user
  }
  onChangeHandler = () => {
    alert('hi from the handler')
  }
  render () {
    // const file = document.getElementById("photoupload").files[0]
    return (
      <div>
        <h3>This is where to upload an image</h3>
        <input id="photoupload" onChange={this.onChangeHandler} type="file" accept="image/*" />
      </div>
    )
  }
}
export default UploadImage

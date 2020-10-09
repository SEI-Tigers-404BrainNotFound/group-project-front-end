
  handleSubmitFile = (event) => {
    event.preventDefault()
    const data = new FormData()
    data.append('photoupload', this.state.file)
    data.append('filename', this.state.fileName)
    data.append('tag', 'testtag')
    data.append('description', 'testDescription')
    try {
      axios({
        method: 'POST',
        url: `${apiUrl}/userImages/Image`,
        headers: { 'Authorization': `Bearer ${this.state.user.token}` },
        data
      })
      const x = 4
      console.log(x)
    } catch (exception) {
      alert(exception.message)
    }
  }
  render () {
    return (
      <div>
        <h3>This is where to upload an image</h3>
        <Form onSubmit={this.handleSubmitFile} enctype="multipart/form-data" >
          <Form.Group>
            <Form.Control name="photoupload" type="file" onChange={this.handleChange} />
            <Button variant='primary' type='submit'>Submit</Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}
export default UploadImageimport React from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import apiUrl from './../../apiConfig'
class UploadImage extends React.Component {
  constructor ({ user }) {
    super()
    this.state = {
      user: user,
      file: null,
      fileName: ''
    }
  }
  handleChange = (event) => {
    this.setState({
      file: event.target.files[0],
      fileName: event.target.files[0].name
    })
  }
  handleSubmitFile = async (event) => {
    event.preventDefault()
    const data = new FormData()
    data.append('photoupload', this.state.file)
    data.append('filename', this.state.fileName)
    data.append('tag', 'testtag')
    data.append('description', 'testDescription')
    try {
      axios({
        method: 'POST',
        url: `${apiUrl}/userImages/Image`,
        headers: { 'Authorization': `Bearer ${this.state.user.token}` },
        data
      })
      const x = 4
      console.log(x)
    } catch (exception) {
      alert(exception.message)
    }
  }
  render () {
    return (
      <div>
        <h3>This is where to upload an image</h3>
        <Form onSubmit={this.handleSubmitFile} enctype="multipart/form-data" >
          <Form.Group>
            <Form.Control name="photoupload" type="file" onChange={this.handleChange} />
            <Button variant='primary' type='submit'>Submit</Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}
export default UploadImage

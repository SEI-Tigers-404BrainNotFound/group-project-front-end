import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import NewsFeed from '../NewsFeed/NewsFeed'
import ProfileNew from '../Profile/ProfileNew'
import UploadImage from '../UploadImage/UploadImage'
import ImageProfile from '../ImageProfile/ImageProfile'
import ImageUpdate from '../ImageUpdate/ImageUpdate'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route exact path='/' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/news-feed' render={() => (
            <NewsFeed user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/user-profile' render={() => (
            <ProfileNew user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/upload-image' render={() => (
            <UploadImage msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/image-profile/:id' render={(userImageProps) => {
            const { match } = userImageProps
            const currentImageId = match.params.id
            return (
              <ImageProfile
                id={currentImageId}
                user={user}
                msgAlert={this.msgAlert}
              />
            )
          }} />
          <AuthenticatedRoute user={user} exact path='/image-update/:id' render={(userImageProps) => {
            const { match } = userImageProps
            const currentImageId = match.params.id
            return (
              <ImageUpdate
                id={currentImageId}
                user={user}
                msgAlert={this.msgAlert}
              />
            )
          }} />
        </main>
      </Fragment>
    )
  }
}

export default App

import React from 'react'
import TopBar from '../topbar/topbar.jsx'
import Featured from '../featured/featured.jsx'
import Steps from '../steps/steps.jsx'
import Auth from '../auth/auth.jsx'
import NewList from '../newList/newList.jsx'
import Firebase from 'firebase'
var ref = new Firebase("https://opensesame.firebaseio.com");

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
}

export default React.createClass({
  getInitialState: function () {
    return {loggedIn: false}
  },

  componentDidMount: function () {
    if (this.loggedIn()) {
      this.setState({loggedIn: true})
    }
  },

  loggedIn: function () {
    console.log((ref.getAuth() !== null))
    return (ref.getAuth() !== null)
  },

  getUserUID: function () {
    var userDetails = ref.getAuth()
    if (userDetails) {
      return userDetails.uid
    }
  },

  stateSpecificComponent: function (component) {
    if (this.state.loggedIn) {
      return component()
    }
  },

  renderNewList: function () {
    return (
      <NewList userUID={this.getUserUID()}/>
    )
  },

  renderSteps: function () {
    return (
      <Steps userUID={this.getUserUID()}/>
    )
  },

  render: function() {

    return (
      <div>
        <TopBar />
        <div className="container">
          {this.props.children}
        </div>
      </div>

    )
  }
})

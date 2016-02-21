import React from 'react'
import Firebase from 'firebase'
var ref = new Firebase("https://opensesame.firebaseio.com");

export default React.createClass({
  getInitialState: function () {
    return {loggedIn: false}
  },

  componentDidMount: function () {
    if (this.loggedIn()) {
      this.setState({loggedIn: true})
    }
  },

  signIn: function () {
    ref.authWithPassword({
      email    : "ddmckendrick@gmail.com",
      password : "password"
    }, (error, authData) => {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        this.setState({loggedIn: true})
      }
    });
  },

  signUp: function () {
    ref.createUser({
      email    : "ddmckendrick@gmail.com",
      password : "password",
      name: "Donald McKendrick"
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid, userData);
        ref.child("users").child(userData.uid).set({
          provider: "email",
          name: "Donald McKendrick"
        });
      }
    });
  },

  signOut: function () {
    ref.unauth()
    this.setState({loggedIn: false})
  },

  deleteAccount: function () {
    ref.removeUser({
      email    : "ddmckendrick@gmail.com",
      password : "password"
    }, function(error) {
      if (error) {
        switch (error.code) {
          case "INVALID_USER":
            console.log("The specified user account does not exist.");
            break;
          case "INVALID_PASSWORD":
            console.log("The specified user account password is incorrect.");
            break;
          default:
            console.log("Error removing user:", error);
        }
      } else {
        console.log("User account deleted successfully!");
      }
    })
  },

  loggedIn: function () {
    console.log((ref.getAuth() !== null))
    return (ref.getAuth() !== null)
  },

  stateSpecificComponents: function () {
    if (this.state.loggedIn) {
      return (
        <div>
          <a className="btn" onClick={this.signOut}>Sign Out</a>
          <a className="btn" onClick={this.deleteAccount}>Delete Account</a>
        </div>
      )
    } else {
      return (
        <div>
          <a className="btn" onClick={this.signUp}>Sign Up</a>
          <a className="btn" onClick={this.signIn}>Sign In</a>
        </div>
      )
    }
  },

  render: function () {
    return (
      <div className="row">
        {this.stateSpecificComponents()}
        <a className="btn" onClick={this.loggedIn}>logged IN</a>
      </div>
    )
  }
})

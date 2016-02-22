import React from 'react'
import Firebase from 'firebase'
import SignUp from './signUp.jsx'
import SignIn from './signIn.jsx'
var ref = new Firebase("https://opensesame.firebaseio.com");

export default React.createClass({
  getInitialState: function () {
    return {
      loggedIn: false,
      method: "up"
    }
  },

  componentDidMount: function () {
    if (this.loggedIn()) {
      this.setState({loggedIn: true})
    }
  },

  signIn: function (email, password) {
    ref.authWithPassword({
      email,
      password
    }, (error, authData) => {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        this.setState({loggedIn: true})
      }
    });
  },

  signUp: function (email, password, name) {
    console.log("hi");
    ref.createUser({
      email,
      password,
      name
    }, (error, userData) => {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid, userData);
        ref.child("users").child(userData.uid).set({
          provider: "email",
          name
        });
        this.signIn(email, password)
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

  switch: function (method) {
    return () => {
      this.setState({method})
    }

  },

  inOrUp: function () {
    if (this.state.method === "up") {
      return (
        <SignUp action={this.signUp}/>
      )
    } else {
      return <SignIn action={this.signIn}/>
    }
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
        <div className="col-sm-12 col-md-6">
          <ul className="nav nav-tabs">
            <li role="presentation" className={ (this.state.method === "up") ? "active" : null}><a onClick={this.switch("up")}>Sign Up</a></li>
            <li role="presentation" className={ (this.state.method === "in") ? "active" : null}><a onClick={this.switch("in")}>Sign In</a></li>
          </ul>
          <br/>
          {this.inOrUp()}
        </div>
      )
    }
  },

  render: function () {
    return (
      <div className="container">
        <div className="row">
          {this.stateSpecificComponents()}
        </div>
      </div>
    )
  }
})

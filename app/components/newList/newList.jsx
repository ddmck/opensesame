import React from 'react';
import Firebase from 'firebase'
var ref = new Firebase("https://opensesame.firebaseio.com");
import ReactFireMixin from 'reactfire'

export default React.createClass({
  mixins: [ReactFireMixin],

  componentWillMount: function() {
    var ref = new Firebase("https://opensesame.firebaseio.com/users/" + this.props.userUID + "/lists");
    this.bindAsArray(ref, "lists");
  },

  render: function() {
    return (
      <p>{this.state.lists.length}</p>
    )
  }

})

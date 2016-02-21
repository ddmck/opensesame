import React from 'react';
import Firebase from 'firebase'
var ref = new Firebase("https://opensesame.firebaseio.com");
import ReactFireMixin from 'reactfire'

export default React.createClass({
  mixins: [ReactFireMixin],

  componentWillMount: function() {
    var ref = new Firebase("https://opensesame.firebaseio.com/lists").orderByChild("userUID").startAt(this.props.userUID).endAt(this.props.userUID);
    this.bindAsArray(ref, "lists");
  },

  addList: function () {
    var ref = new Firebase("https://opensesame.firebaseio.com/lists")
    ref.push({
      userUID: this.props.userUID,
      name: "test",
      votes: 0
    })
  },

  render: function() {
    return (
      <p>{this.state.lists.length} <a onClick={this.addList}>Add new list</a></p>

    )
  }

})

import React from "react"
import Firebase from 'firebase'
import ReactFireMixin from 'reactfire'

export default React.createClass({
  mixins: [ReactFireMixin],

  componentWillMount: function() {
    var ref = new Firebase("https://opensesame.firebaseio.com/lists/" + this.props.params.listUID);
    this.bindAsObject(ref, "list");
  },

  getInitialState: function () {
    return {
      list: {}
    }
  },

  render: function () {
    return (
      <div className="row">
        <h1>{this.state.list.title}</h1>
      </div>
    )
  }
})

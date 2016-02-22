import React from 'react';
import Firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import Moment from 'moment'
import {Link} from 'react-router'

export default React.createClass({
  mixins: [ReactFireMixin],

  componentWillMount: function() {
    var ref = new Firebase("https://opensesame.firebaseio.com/lists/" + this.props.uid)
    this.bindAsObject(ref, "list");
  },

  addStep: function (e) {
    e.preventDefault()
    var ref = new Firebase("https://opensesame.firebaseio.com/lists/" + this.props.uid + "/steps")
    var timestamp = (Moment().valueOf())
    ref.push({
      userUID: this.props.userUID,
      listUID: this.props.uid,
      title: this.refs.title.value,
      description: this.refs.description.value,
      source: this.refs.source.value,
      votes: 0,
      dateCreated: (timestamp / 1000),
      completed: false
    })
  },

  renderSteps: function () {
    if (this.state.list) {
      if (this.state.list.steps) {
        return Object.keys(this.state.list.steps).map((step) => {
          return <li>{this.state.list.steps[step].title}</li>
        })
      }
    }
  },

  render: function () {
    return (
      <div className="col-sm-12">
        <div className="panel panel-default">
          <div className="panel-body">
            <p>{this.props.title}</p>
            <p>{this.props.description}</p>
            <Link to={"/lists/" + this.props.uid}>View Instructions</Link>
          </div>
        </div>
      </div>
    )
  }

});

import React from 'react';
import Firebase from 'firebase'
var ref = new Firebase("https://opensesame.firebaseio.com");
import ReactFireMixin from 'reactfire'
import Moment from 'moment'

export default React.createClass({
  mixins: [ReactFireMixin],

  componentWillMount: function() {
    var ref = new Firebase("https://opensesame.firebaseio.com/lists").orderByChild("userUID").startAt(this.props.userUID).endAt(this.props.userUID);
    this.bindAsArray(ref, "lists");
  },

  addList: function (e) {
    e.preventDefault()
    var ref = new Firebase("https://opensesame.firebaseio.com/lists")
    var timestamp = (Moment().valueOf())
    ref.push({
      userUID: this.props.userUID,
      title: this.refs.title.value,
      description: this.refs.description.value,
      votes: 0,
      dateCreated: (timestamp / 1000),
      tags: this.refs.tags.value.split(", ")
    })
  },

  render: function() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="exampleInputEmail1" ref="title" placeholder="Title"/>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" rows="3" ref="description"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputFile">Tags</label>
          <input type="text" id="exampleInputFile" className="form-control" ref="tags" />
          <p className="help-block">Seperate each tag with a comma.</p>
        </div>
        <button type="submit" className="btn btn-default" onClick={this.addList}>Submit</button>
      </form>
    )
  }

})

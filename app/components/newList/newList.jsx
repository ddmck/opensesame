import React from 'react';
import Firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import Moment from 'moment'
import { History } from 'react-router'

export default React.createClass({
  mixins: [ReactFireMixin, History],

  addList: function (e) {
    e.preventDefault()
    var authref = new Firebase("https://opensesame.firebaseio.com/")
    console.log(authref.getAuth());
    var ref = new Firebase("https://opensesame.firebaseio.com/lists")
    var timestamp = (Moment().valueOf())
    var newItem = ref.push({
      userUID: authref.getAuth().uid,
      title: this.refs.title.value,
      description: this.refs.description.value,
      votes: 0,
      dateCreated: (timestamp / 1000),
      tags: this.refs.tags.value.split(", ")
    });
    console.log(this.history)
    this.history.pushState(null, "/lists/" + newItem.key())
  },

  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8">
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
          </div>
        </div>
      </div>
    )
  }

})

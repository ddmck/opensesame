import React from "react"
import Firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import Moment from 'moment'

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

  addStep: function (e) {
    e.preventDefault()
    var ref = new Firebase("https://opensesame.firebaseio.com/lists/" + this.props.params.listUID + "/steps")
    var timestamp = (Moment().valueOf())
    ref.push({
      userUID: ref.getAuth().uid,
      listUID: this.props.params.listUID,
      title: this.refs.title.value,
      description: this.refs.description.value,
      source: this.refs.source.value,
      votes: 0,
      dateCreated: (timestamp / 1000),
      completed: false
    })
    this.refs.title.value = ""
    this.refs.description.value = ""
    this.refs.source.value = ""
  },

  loggedIn: function () {
    var ref = new Firebase("https://opensesame.firebaseio.com/")
    if (ref.getAuth() && this.state.list.userUID === ref.getAuth().uid) {
      return (
        <div className="panel panel-default">
          <div className="panel-body">
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
                <label htmlFor="exampleInputFile">Link</label>
                <input type="text" id="exampleInputFile" className="form-control" ref="source" />
                <p className="help-block">Seperate each tag with a comma.</p>
              </div>
              <button type="submit" className="btn btn-default" onClick={this.addStep}>Submit</button>
            </form>
          </div>
        </div>
      )
    }
  },

  renderSteps: function () {
    if (this.state.list) {
      if (this.state.list.steps) {
        return Object.keys(this.state.list.steps).map((step) => {
          return (
            <div className="panel panel-default">
              <div className="panel-body">
                <h4>{this.state.list.steps[step].title}</h4>
                <p className="">{this.state.list.steps[step].description}</p>
                <a className="btn btn-primary" href={this.state.list.steps[step].source} target="_blank">Read More</a>
              </div>
            </div>
          )
        })
      }
    }
  },

  render: function () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <h1>{this.state.list.title}</h1>
            <p className="lead">{this.state.list.description}</p>
            {this.renderSteps()}
            {this.loggedIn()}
          </div>
        </div>
      </div>
    )
  }
})

import React from 'react';
import Firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import Moment from 'moment'

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
    console.log("List: ", this.state.list)
    if (this.state.list) {
      if (this.state.list.steps) {
        console.log(Object.keys(this.state.list.steps))
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
            <ul>{this.renderSteps()}</ul>
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
      </div>
    )
  }

});

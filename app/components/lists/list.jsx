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
          </div>
        </div>
      </div>
    )
  }
})

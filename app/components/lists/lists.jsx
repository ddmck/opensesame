import React from "react"
import ListItem from './listItem.jsx'
import Firebase from 'firebase'
import ReactFireMixin from 'reactfire'

const data = [
  {title: "Winning",
   description: "How I learned to win."}
]

export default React.createClass({
  mixins: [ReactFireMixin],

  componentWillMount: function() {
    var ref = new Firebase("https://opensesame.firebaseio.com/lists").limitToLast(10);
    this.bindAsArray(ref, "lists");
  },

  renderCards: function () {
    return this.state.lists.map((details, index) => {
      return <ListItem title={details.title} description={details.description} key={index}  uid={details[".key"]} userUID={this.props.userUID} />
    })
  },

  render: function () {
    return (
      <div className="row">
        {this.renderCards()}
      </div>
    )
  }
})

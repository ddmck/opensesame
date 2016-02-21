import React from "react"
import Card from './card.jsx'
import Firebase from 'firebase'
import ReactFireMixin from 'reactfire'

const data = [
  {title: "Winning",
   description: "How I learned to win."}
]

export default React.createClass({
  mixins: [ReactFireMixin],
  
  componentWillMount: function() {
    var ref = new Firebase("https://opensesame.firebaseio.com/Items");
    this.bindAsArray(ref, "items");
  },

  renderCards: function () {
    return this.state.items.map((details) => {
      return <Card title={details.title} description={details.description}/>
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

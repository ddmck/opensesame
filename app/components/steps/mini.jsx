import React from "react"
import Card from './card.jsx'
import Firebase from 'firebase'
import ReactFireMixin from 'reactfire'

export default React.createClass({
  componentWillMount: function() {
    var ref = new Firebase("https://opensesame.firebaseio.com/lists")
    this.bindAsArray(ref, "list");
  },
})

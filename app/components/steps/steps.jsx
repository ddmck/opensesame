import React from "react"
import Card from './card.jsx'

const data = [
  {title: "Winning",
   description: "How I learned to win."}
]

export default React.createClass({
  renderCards: function () {
    return data.map((details) => {
      return <Card title={details.title} description={details.description}/>
    })
  },

  render: function () {
    console.log(data);
    return (
      <div className="row">
        {this.renderCards()}
      </div>
    )
  }
})

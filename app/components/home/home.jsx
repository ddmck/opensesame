import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render: function () {
    return (
      <div className="jumbotron" style={{backgroundImage: "url(https://images.unsplash.com/photo-1452716726610-30ed68426a6b?crop=entropy&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1450)", backgroundSize: "cover", height: '100%', marginTop: '-20px'}}>
        <div className="container">
          <h1>Welcome to How I Learned!</h1>
          <p>We are creating a community of people who share the process for learning new things.</p>
          <p><Link className="btn btn-primary btn-lg" to={"/lists/"}>Featured Lists</Link> <a className="btn btn-primary btn-lg" href="https://medium.com/@petergault/how-i-learned-vision-statement-ded505ba74ac#.3dj3vuv6v" target="_blank" role="button">Learn more</a></p>
        </div>
      </div>
    )
  }
})

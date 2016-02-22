import React from 'react'

export default React.createClass({
  render: function () {
    return (
      <div className="jumbotron" style={{backgroundImage: "url(http://wallarthd.com/wp-content/uploads/2014/09/Mountain-Summit-View-Wallpaper-HD-290.jpg)", backgroundSize: "cover", height: '100%', marginTop: '-20px'}}>
        <div className="container">
          <h1>Welcome to How I Learned!</h1>
          <p>...</p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
        </div>
      </div>
    )
  }
})

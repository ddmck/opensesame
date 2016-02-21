import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <div className="card card-block">
        <h4 className="card-title">{this.props.title}</h4>
        <p className="card-text">{this.props.description}</p>
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
      </div>
    )
  }

});

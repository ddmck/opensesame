import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <div className="col-sm-6 col-md-4">
        <div className="panel panel-default">
          <div className="panel-body">
            <p>{this.props.title}</p>
            <p>{this.props.description}</p>
            <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
          </div>
        </div>
      </div>
    )
  }

});

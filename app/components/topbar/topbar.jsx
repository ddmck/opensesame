import React from 'react';
import {Link} from 'react-router'
const AppBarExampleIcon = () => (
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">How I Learned</Link>
      </div>
      <ul className="nav navbar-nav navbar-left">
        <li><Link to="/lists">Lists</Link></li>
        <li><Link to="/lists/new">Create a List</Link></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/auth">Log In</Link></li>
      </ul>

    </div>
  </nav>
);

export default AppBarExampleIcon;

import React from 'react';
import {Link} from 'react-router'
const AppBarExampleIcon = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">TIL</Link>
      </div>
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/auth">Log In</Link></li>
      </ul>

    </div>
  </nav>
);

export default AppBarExampleIcon;

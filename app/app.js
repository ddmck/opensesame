import React from "react";
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import "./styles/style.scss";
import Root from './components/root/root.jsx';
import Auth from './components/auth/auth.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const NoMatch = React.createClass({
  render() {
    return (
      <div>
        <h2>Not found</h2>
      </div>
    )
  }
})

const Home = React.createClass({
  render() {
    return (
      <div>
        <h2>Welcome to TIL</h2>
      </div>
    )
  }
})

render((
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Home} />
      <Route path="/auth" component={Auth}/>
      <Route path="/*" component={NoMatch}/>
    </Route>

  </Router>),
  document.getElementById("root")
);

import React from "react";
import { render } from 'react-dom'
import "./styles/style.scss";
import RaisedButton from 'material-ui/lib/raised-button';


render((
  <RaisedButton label="Hello World" primary={true} />),
  document.getElementById("root")
);

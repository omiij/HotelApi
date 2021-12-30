import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App.js'

function Apptwo(){
  return <h1>This is the second app</h1>;
}
ReactDOM.render(
  <React.Fragment>
 <App />,
 <Apptwo/>,
 </React.Fragment>,
  document.getElementById("root")
  
);

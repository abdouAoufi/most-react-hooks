import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import UseReducer from "./components/UseReducer/UseReducer";
import UseRef from "./components/UseRef/UseRef";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/use-reducer" component={UseReducer} />
        <Route path="/use-ref" component={UseRef} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

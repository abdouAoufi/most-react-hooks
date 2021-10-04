import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import UseReducer from "./components/UseReducer/UseReducer";
import UseRef from "./components/UseRef/UseRef";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UseLyout from "./components/UseLayout/UseLayout";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/use-reducer" component={UseReducer} />
        <Route path="/use-ref" component={UseRef} />
        <Route path="/use-layout" component={UseLyout} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

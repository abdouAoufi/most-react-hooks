import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import UseReducer from "./hooks/UseReducer/UseReducer";
import UseRef from "./hooks/UseRef/UseRef";
import UseLyout from "./hooks/UseLayout/UseLayout";
import UseMemo from "./hooks/UseMemo";
import Welcome from "./Welcome";
import UseImperativeLayout from "./hooks/UseImperativeHandle/UseImperativeHandle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/use-reducer" component={UseReducer} />
        <Route path="/use-ref" component={UseRef} />
        <Route path="/use-layout" component={UseLyout} />
        <Route path="/use-imperative" component={UseImperativeLayout} />
        <Route path="/use-memo" component={UseMemo} />
        <Route path="/" component={Welcome} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

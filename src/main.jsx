import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import UseReducer from "./components/UseReducer/UseReducer";
import UseRef from "./components/UseRef/UseRef";
import UseLyout from "./components/UseLayout/UseLayout";
import UseMemo from "./components/UseMemo";
import UseImperativeLayout from "./components/UseImperativeHandle/UseImperativeHandle";
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
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

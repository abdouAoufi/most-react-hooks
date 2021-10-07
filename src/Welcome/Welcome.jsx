import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <>
      <Link to="/use-layout">Use layout hook</Link>
      <Link to="/use-memo">Use memo hook</Link>
      <Link to="/use-reducer">Use reducer hook</Link>
      <Link to="/use-ref">Use ref hook</Link>
      <Link to="/use-imperative">Use imperative hook</Link>
    </>
  );
}

export default Welcome;

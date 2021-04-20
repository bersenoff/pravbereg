import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./views";

const Component: React.FunctionComponent = () => {
  return <Router><App /></Router>
}

Component.displayName = "Root";

render(<Component />, document.getElementById("root"));
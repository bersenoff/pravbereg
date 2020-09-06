import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { App } from "./views";

const history = createBrowserHistory();

const Component: React.FunctionComponent = () => {
  return <Router><App /></Router>
}

Component.displayName = "Root";

render(<Component />, document.getElementById("root"));
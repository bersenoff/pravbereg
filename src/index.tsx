import React from "react";
import { render } from "react-dom";
import { App } from "./views";

const Component: React.FunctionComponent = () => {
  return <App />
}

Component.displayName = "Root";

render(<Component />, document.getElementById("root"));
import React from "react";
import { Router, Route, Switch, withRouter } from "react-router-dom";
import { Toolbar, Footer } from "../";
import { MainPage, AboutUs } from "../../pages";
import { BrowserHistory } from "history";
import "antd/dist/antd.css";
import "./index.css";

interface IProps {
  history: BrowserHistory<object>
}

const Component: React.FunctionComponent<IProps> = ({ history }) => {
  return (
      <>
        <Toolbar />
        <Switch>
          <Route history={history} exact path="/about-us" component={AboutUs} />
          <Route history={history} path="/" component={MainPage} />
        </Switch>
        <Footer />
      </>
  )
}

export default withRouter(Component);
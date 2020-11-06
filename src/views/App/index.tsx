import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Toolbar, Footer } from "../";
import { MainPage, Services } from "../../pages";
import { Map } from "../";
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
        <div className="wrapper">
          <Switch>
            <Route history={history} exact={true} path="/" component={MainPage} />

            <Route history={history} exact={true} path="/uslugi/peregovory-i-mediaciya" component={Services.Mediation} />
            <Route history={history} exact={true} path="/uslugi/podgotovka-dogovorov-i-sostavlenie-iskov" component={Services.Agreement} />
            <Route history={history} exact={true} path="/uslugi/predstavitelstvo-v-sude-i-v-gosudarstvennyh-organah" component={Services.Court} />
            <Route history={history} exact={true} path="/uslugi/ispolnitelnoe-proizvodstvo" component={Services.Bailiff} />
            <Route history={history} exact={true} path="/uslugi/rabota" component={Services.Work} />
            <Route history={history} exact={true} path="/uslugi/semiya" component={Services.Family} />
            <Route history={history} exact={true} path="/uslugi/nedvizhimost" component={Services.Immovables} />
            <Route history={history} exact={true} path="/uslugi/nasledstvo" component={Services.Legacy} />
            <Route history={history} exact={true} path="/uslugi/biznes" component={Services.Business} />
            <Route history={history} exact={true} path="/uslugi/vzyskanie-dolgov" component={Services.Debts} />
            <Route history={history} exact={true} path="/uslugi/nalogi" component={Services.Taxes} />
            <Route history={history} exact={true} path="/uslugi/bankrotstvo" component={Services.Bankruptcy} />
            <Route history={history} exact={true} path="/uslugi/zashchita-prav-potrebitelej" component={Services.CRP} />
            <Route history={history} exact={true} path="/uslugi/zhilishchnye-spory" component={Services.HD} />
            <Route history={history} exact={true} path="/uslugi/pomoshch-pri-dtp" component={Services.RA} />
            <Route history={history} exact={true} path="/uslugi/uslugi-advokata-po-ugolovnym-delam" component={Services.Lawyer} />
          </Switch>
          <Map />
          <Footer />
        </div>
      </>
  )
}

export default withRouter(Component);
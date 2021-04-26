import React from "react";
import { Route, Switch } from "react-router-dom";
import { Toolbar, Footer } from "../";
import { Blog, MainPage, Services } from "../../pages";
import { Map } from "../";
import "antd/dist/antd.css";
import "./index.css";

const Component: React.FunctionComponent = () => {
  return (
      <>
        <Toolbar />
        <div className="wrapper">
          <Switch>
            <Route exact={true} path="/" component={MainPage} />

            <Route exact={true} path="/uslugi/peregovory-i-mediaciya" component={Services.Mediation} />
            <Route exact={true} path="/uslugi/podgotovka-dogovorov-i-sostavlenie-iskov" component={Services.Agreement} />
            <Route exact={true} path="/uslugi/predstavitelstvo-v-sude-i-v-gosudarstvennyh-organah" component={Services.Court} />
            <Route exact={true} path="/uslugi/ispolnitelnoe-proizvodstvo" component={Services.Bailiff} />
            <Route exact={true} path="/uslugi/rabota" component={Services.Work} />
            <Route exact={true} path="/uslugi/semiya" component={Services.Family} />
            <Route exact={true} path="/uslugi/nedvizhimost" component={Services.Immovables} />
            <Route exact={true} path="/uslugi/nasledstvo" component={Services.Legacy} />
            <Route exact={true} path="/uslugi/biznes" component={Services.Business} />
            <Route exact={true} path="/uslugi/vzyskanie-dolgov" component={Services.Debts} />
            <Route exact={true} path="/uslugi/nalogi" component={Services.Taxes} />
            <Route exact={true} path="/uslugi/bankrotstvo" component={Services.Bankruptcy} />
            <Route exact={true} path="/uslugi/zashchita-prav-potrebitelej" component={Services.CRP} />
            <Route exact={true} path="/uslugi/zhilishchnye-spory" component={Services.HD} />
            <Route exact={true} path="/uslugi/pomoshch-pri-dtp" component={Services.RA} />
            <Route exact={true} path="/uslugi/uslugi-advokata-po-ugolovnym-delam" component={Services.Lawyer} />

            <Route exact={true} path="/blog" component={Blog.Main} />
            <Route exact={true} path="/blog/create" component={Blog.Create} />
            <Route exact={true} path="/blog/post/:id/edit" component={Blog.Edit} />
            <Route exact={true} path="/blog/post/:id" component={Blog.Post} />
          </Switch>
          <Map />
          <Footer />
        </div>
      </>
  )
}

export default Component;
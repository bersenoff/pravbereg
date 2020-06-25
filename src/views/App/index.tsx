import React from "react";
import { Toolbar, MainMenu, Promo, Services, Footer } from "../";
import "antd/dist/antd.css";
import "./index.css";

const Component: React.FunctionComponent = () => {
  return (
    <>
      <Toolbar />
      <div id="wrapper">
        <MainMenu />
        <Promo />
        <Services />
        <Footer />
      </div>
    </>
  )
}

export default Component;
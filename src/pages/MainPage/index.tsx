/**
 * Главная страница (Langing Page)
 */

import React from "react";
import Promo from "./Promo";
import Services from "./Services";
import Map from "./Map";

const Component: React.FunctionComponent = () => {
  return (
    <>
      <Promo />
      <Services />
      <Map />
    </>
  );
}

export default Component;
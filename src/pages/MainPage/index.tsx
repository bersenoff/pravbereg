/**
 * Главная страница (Langing Page)
 */

import React from "react";
import Promo from "./Promo";
import Services from "./Services";

const Component: React.FunctionComponent = () => {
  return (
    <>
      <Promo />
      <Services />
    </>
  );
}

export default Component;
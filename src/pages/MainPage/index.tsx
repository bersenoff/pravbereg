/**
 * Главная страница (Langing Page)
 */

import React from "react";
import Promo from "./Promo";
import Advantages from "./Advantages";
import Services from "./Services";

const Component: React.FunctionComponent = () => {
  return (
    <>
      <Promo />
      <Advantages />
      <Services />
    </>
  );
}

export default Component;
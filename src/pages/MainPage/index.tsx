/**
 * Главная страница (Langing Page)
 */

import React from "react";
import Promo from "./Promo";
import Advantages from "./Advantages";
import Services from "./Services";
import Appeal from "./Appeal";
import Team from "./Team";

const Component: React.FunctionComponent = () => {
  return (
    <>
      <Promo />
      <Advantages />
      <Services />
      <Appeal />
      <Team />
    </>
  );
}

export default Component;
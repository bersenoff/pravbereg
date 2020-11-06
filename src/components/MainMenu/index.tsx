/**
 * Главное меню
 */

import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Component: React.FunctionComponent = () => {
  return (
    <div className="section">
      <div className="section-content" style={{ textAlign: "center" }}>
        <div id="logo">
          <div id="logo-img">
            <Link to="/"><img src="/images/logo.png" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
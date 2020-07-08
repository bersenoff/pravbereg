/**
 * Главное меню
 */

import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Component: React.FunctionComponent = () => {
  return (
    <div className="section">
      <div className="section-content">
        <div id="logo">
          <div id="logo-img">
            <Link to="/"><img src="/images/logo-white.png" style={{ height: "100px" }} /></Link>
          </div>
        </div>
        <div id="main-menu">
          <ul>
            <li><Link className="main-menu-a" to="/"><i className="fas fa-home"></i> ГЛАВНАЯ</Link></li>
            <li><Link className="main-menu-a" to="/"><i className="fas fa-comments"></i> ОТЗЫВЫ</Link></li>
            <li><Link className="main-menu-a" to="/about-us"><i className="fas fa-info-circle"></i> О НАС</Link></li>
          </ul>
        </div>
        <div style={{ clear: "both" }}></div>
      </div>
    </div>
  );
}

export default Component;
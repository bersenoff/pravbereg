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
            <Link to="/"><img src="/images/logo-white.png" /></Link>
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
        <div id="mobile-contacts">
          <ul>
            <li><i className="fas fa-map-marker"></i> &nbsp; г. Иркутск, ул. Терешковой 15 "Б", 4 этаж</li>
            <li><i className="fas fa-phone"></i> &nbsp; +7 (3952) 722-401</li>
            <li><i className="fas fa-envelope"></i> &nbsp; <a href="mailto:prabereg@yandex.ru">prabereg@yandex.ru</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Component;
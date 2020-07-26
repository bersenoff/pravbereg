/**
 * Тулбар
 */

import React from "react";
import { Tooltip } from "antd";
import "./index.css";

const Component: React.FunctionComponent =  () => {
  return (
    <div className="toolbar header">
      <div className="section-content header-desktop">
        <div id="toolbar-info">
          <ul>
            <li><i className="fas fa-map-marker"></i> г. Иркутск, ул. Терешковой 15 "Б", 4 этаж</li>
            <li><i className="fas fa-phone"></i> +7 (3952) 722-401</li>
            <li><i className="fas fa-envelope"></i> <a href="mailto:prabereg@yandex.ru">prabereg@yandex.ru</a></li>
          </ul>
        </div>
        <div id="toolbar-social">
          <ul>
            <li><Tooltip title="Мы ВКонтакте"><a href="#"><i className="fab fa-vk"></i></a></Tooltip></li>
            <li><Tooltip title="Мы в Одноклассниках"><a href="#"><i className="fab fa-odnoklassniki"></i></a></Tooltip></li>
            <li><Tooltip title="Мы в Facebook"><a href="#"><i className="fab fa-facebook-f"></i></a></Tooltip></li>
            <li><Tooltip title="Мы в Twitter"><a href="#"><i className="fab fa-twitter"></i></a></Tooltip></li>
          </ul>
        </div>
        <div style={{ clear: "both" }}></div>
      </div>
      <div className="section-content header-mobile"><i className="fas fa-bars"></i></div>
    </div>
  )
}

export default Component;
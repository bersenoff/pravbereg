/**
 * Тулбар
 */

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Tooltip } from "antd";
import { Link } from "react-router-dom";
import "./index.css";

interface IState {
  visible: {
    main_menu: boolean;
  }
}

const Component: React.FunctionComponent =  () => {
  const [state, setState] = useState<IState>({
    visible: {
      main_menu: false
    }
  });

  const { visible } = state;

  const toggleMenu = () => {
    setState((s) => ({
      ...s,
      visible: {
        ...s.visible,
        main_menu: !s.visible.main_menu
      }
    }));
  }

  const handleClickOutsideMenu = (event: any) => {
    const btn = document.getElementsByClassName("mobile-menu-btn")[0];
    const menu = document.getElementsByClassName("mobile-main-menu")[0];

    if (!menu.contains(event.target) && !btn.contains(event.target)) {
      setState((s) => ({
        ...s,
        visible: {
          main_menu: false
        }
      }));
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideMenu, false);
    return () => {
      document.removeEventListener("click", handleClickOutsideMenu, false);
    }
  }, []);

  return (
    <div className="toolbar header">
      <div className="section-content header-desktop">
        <div className="toolbar-info">
          <ul>
            <li><i className="fas fa-map-marker"></i> г. Иркутск, ул. Терешковой 15 "Б", 4 этаж</li>
            <li><i className="fas fa-phone"></i> +7 (3952) 722-401</li>
            <li><i className="fas fa-envelope"></i> <a href="mailto:prabereg@yandex.ru">prabereg@yandex.ru</a></li>
          </ul>
        </div>
        <div className="toolbar-social">
          <ul className="toolbar-menu">
            <li><Tooltip title="Мы ВКонтакте"><a href="#"><i className="fab fa-vk"></i></a></Tooltip></li>
            <li><Tooltip title="Мы в Одноклассниках"><a href="#"><i className="fab fa-odnoklassniki"></i></a></Tooltip></li>
            <li><Tooltip title="Мы в Facebook"><a href="#"><i className="fab fa-facebook-f"></i></a></Tooltip></li>
            <li><Tooltip title="Мы в Twitter"><a href="#"><i className="fab fa-twitter"></i></a></Tooltip></li>
          </ul>
        </div>
        <div style={{ clear: "both" }}></div>
      </div>
      <div className="section-content header-mobile">
        <div className="header-mobile-menu">
          <ul className="toolbar-menu">
            <li className="mobile-menu-btn"><a href="#" onClick={toggleMenu}><i className="fas fa-bars"></i></a></li>
          </ul>

          <ul className="mobile-main-menu" onClick={toggleMenu} style={{ visibility: (visible.main_menu) ? "visible" : "hidden" }}>
            <li><Link to="/"><i className="fas fa-home"></i> ГЛАВНАЯ</Link></li>
            <li><Link to="/about-us"><i className="fas fa-info-circle"></i> О НАС</Link></li>
          </ul>
        </div>
        <div className="header-mobile-social">
          <ul className="toolbar-menu">
            <li><a href="/" target="_blank"><i className="fab fa-vk"></i></a></li>
            <li><a href="#" target="_blank"><i className="fab fa-odnoklassniki"></i></a></li>
            <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Component;
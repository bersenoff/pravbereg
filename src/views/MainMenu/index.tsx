import React from "react";
import "./index.css";

const Component: React.FunctionComponent = () => {
  return (
    <div className="section">
      <div className="section-content">
        <div id="logo"><a href="/">
          <img src="/images/logo.jpg" /></a>
        </div>
        <div id="main-menu">
          <ul>
            <li><a href="#">ГЛАВНАЯ</a></li>
            <li><a href="#">БЛОГ</a></li>
            <li><a href="#">ОТЗЫВЫ</a></li>
            <li><a href="#">О КОМПАНИИ</a></li>
          </ul>
        </div>
        <div style={{ clear: "both" }}></div>
      </div>
    </div>
  )
}

export default Component;
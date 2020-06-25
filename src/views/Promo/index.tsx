import React from "react";
import { Button } from "antd";
import "./index.css";

const Component: React.FunctionComponent = () => {
  return (
    <div className="section">
      <div className="section-content" style={{ paddingBottom: "1rem" }}>
        <div id="promo">
          <div id="promo-info">
            <div id="promo-title">Поиск справедливости<br />—<br />наш главный мотив в работе!</div>
            <div id="promo-btn-block">
              <Button type="primary" id="promo-btn" className="primary-btn" size="large">Бесплатная консультация</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
import React from "react";
import { Button } from "antd";
import "./index.css";

const Component: React.FunctionComponent = () => {
  return (
    <div id="section-services" className="section">
      <div className="section-content">
        <div id="services-list">
          <div className="service-block">
            <div className="service-block-content">
              <div className="service-block-text">Услуги управляющей компании</div>
              <div className="service-block-btn">
                <Button type="primary" size="large" className="primary-btn">Заказать</Button>
              </div>
            </div>
          </div>
          <div className="service-block">
            <div className="service-block-content">
              <div className="service-block-text">Услуги управляющей компании</div>
              <div className="service-block-btn">
                <Button type="primary" size="large" className="primary-btn">Заказать</Button>
              </div>
            </div>
          </div>
          <div className="service-block">
            <div className="service-block-content">
              <div className="service-block-text">Услуги управляющей компании</div>
              <div className="service-block-btn">
                <Button type="primary" size="large" className="primary-btn">Заказать</Button>
              </div>
            </div>
          </div>
          <div className="service-block">
            <div className="service-block-content">
              <div className="service-block-text">Услуги управляющей компании</div>
              <div className="service-block-btn">
                <Button type="primary" size="large" className="primary-btn">Заказать</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
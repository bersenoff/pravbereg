import React from "react";
import { Button } from "antd";
import WaterWave from "react-water-wave";
import "./index.css";

const Component: React.FunctionComponent = () => {
  return (
    <WaterWave dropRadius={30} style={{ background: "url('/images/water.jpg')", backgroundSize: "cover", height: "100vh", minHeight: "768px" }}>
      {(methods: any) => (
        <>
        <div className="section">
          <div className="section-content">
            <div id="logo">
              <div id="logo-img">
                <a href="/"><img src="/images/logo-white.png" style={{ height: "100px" }} /></a>
              </div>
            </div>
            <div id="main-menu">
              <ul>
                <li><a href="#"><i className="fas fa-home"></i> ГЛАВНАЯ</a></li>
                <li><a href="#"><i className="fas fa-newspaper"></i> БЛОГ</a></li>
                <li><a href="#"><i className="fas fa-comments"></i> ОТЗЫВЫ</a></li>
                <li><a href="#"><i className="fas fa-info-circle"></i> О НАС</a></li>
              </ul>
            </div>
            <div style={{ clear: "both" }}></div>
          </div>
        </div>
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
        </>
      )}
    </WaterWave>
  )
}

export default Component;
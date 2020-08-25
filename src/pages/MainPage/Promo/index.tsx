import React, { useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import WaterWave from "react-water-wave";
import { FeedbackForm, MainMenu } from "../../../components";
import "./index.css";

interface IState {
  visible: {
    feedback: boolean;
  }
}

const Component: React.FunctionComponent = () => {
  const [state, setState] = useState<IState>({
    visible: {
      feedback: false
    }
  });

  const { visible } = state;

  const handleFormVisible = () => {
    setState((s) => ({
      ...s,
      visible: {
        ...s.visible,
        feedback: !s.visible.feedback
      }
    }));
  }

  return (
    <>
    <FeedbackForm visible={visible.feedback} fnVisible={handleFormVisible} />
    <WaterWave dropRadius={30} className="water-wave" style={{ background: "url('/images/bg/water.jpg')", backgroundSize: "cover", minHeight: "calc(100vh)", boxShadow: "0 15px 30px #555" }}>
      {(methods: any) => (
          <>
          <MainMenu />
          <div className="section">
            <div className="section-content">
              <div id="mobile-contacts">
                <ul>
                  <li><i className="fas fa-map-marker"></i> &nbsp; г. Иркутск, ул. Терешковой 15 "Б", 4 этаж</li>
                  <li><i className="fas fa-phone"></i> &nbsp; +7 (3952) 722-401</li>
                  <li><i className="fas fa-envelope"></i> &nbsp; <a href="mailto:prabereg@yandex.ru">prabereg@yandex.ru</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="section promo-section">
            <div className="section-content" style={{ paddingBottom: "1rem" }}>
              <div id="promo">
                <div id="promo-info">
                  <div id="promo-title">Поиск справедливости<br />—<br />наш главный мотив в работе!</div>
                  <div id="promo-btn-block">
                    <Button type="primary" id="promo-btn" className="primary-btn" size="large" onClick={handleFormVisible}>Бесплатная консультация</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </WaterWave>
    </>
  )
}

export default Component;
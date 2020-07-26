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
    <WaterWave dropRadius={30} className="water-wave" style={{ background: "url('/images/bg/water.jpg')", backgroundSize: "cover", height: "calc(100vh - 3rem)" }}>
      {(methods: any) => (
          <>
          <MainMenu />
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
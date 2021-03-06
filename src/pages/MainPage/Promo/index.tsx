import React from "react";
import { FeedbackForm } from "../../../components";
import "./index.css";

const Component: React.FunctionComponent = () => {
  return (
    <>
      <div className="section promo-section">
        <div className="section-content">
          <div id="promo">
            <div id="promo-info">
              <div id="logo">
                <div id="logo-img"><img src="/images/logo.png" /></div>
              </div>
              <div id="promo-title">Результат<br />—<br />главная цель в работе!</div>
              <div id="promo-btn-block">
                <FeedbackForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Component;
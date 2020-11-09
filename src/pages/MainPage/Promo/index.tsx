import React, { useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { FeedbackForm, MainMenu } from "../../../components";
import "./index.css";

interface IProps {}

interface IState {}

const Component: React.FunctionComponent<IProps> = () => {
  return (
    <>
      <MainMenu />
      <div className="section promo-section">
        <div className="section-content" style={{ paddingBottom: "1rem" }}>
          <div id="promo">
            <div id="promo-info">
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
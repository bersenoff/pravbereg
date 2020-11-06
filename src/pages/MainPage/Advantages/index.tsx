import React from "react";
import "./index.css";

const Component: React.FunctionComponent = () => {
  return (
    <div className="section" id="advantages">
      <div className="section-content">
        <div style={{ textAlign: "center" }}><div className="title-block"><i className="fas fa-rocket"></i> ПРЕИМУЩЕСТВА</div></div>
        <div className="block-list">
          <div className="block-item">
            <div className="block-img block-15years"></div>
            <div className="block-text">Более 15 лет опыта</div>
          </div>

          <div className="block-item">
            <div className="block-img block-specialists"></div>
            <div className="block-text">Квалифицированные специалисты в команде</div>
          </div>

          <div className="block-item">
            <div className="block-img block-recommendation"></div>
            <div className="block-text">По рекомендации приходят 2/3 клиентов</div>
          </div>

          <div className="block-item">
            <div className="block-img block-247"></div>
            <div className="block-text">На связи 24/7</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
import React, { useEffect } from "react";
import { FeedbackForm } from "../../../components";

const Component: React.FunctionComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="section">
      <div className="section-content">
        <div className="block-item service-info" style={{ width: "100%" }}>
          <div className="page-title">Работа</div>
          <div className="block-img block-work"></div>
          <p>Трудовые споры являются одним из приоритетных направлений деятельности наших специалистов. Мы можем обеспечить защиту интересов как работника, так и работодателя в любых ситуациях.</p>
          <p>Юристы нашей компании:</p>
          <ul>
            <li>Подробно проконсультируют вас устно или письменно по любым вопросам, касающихся соблюдения трудового и пенсионного законодательства;</li>
            <li>Совместно с вами разработают правовую позицию и представят ваши интересы в суде или государственной инспекции труда;</li>
            <li>Разработают внутренние документы компании, регулирующие трудовые отношения;</li>
          </ul>
          <div style={{ textAlign: "center" }}><FeedbackForm defaultCategory="Работа" /></div>
        </div>
      </div>
    </div>
  );
}

export default Component;
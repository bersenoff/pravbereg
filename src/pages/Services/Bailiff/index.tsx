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
          <div className="page-title">Исполнительное производство</div>
          <div className="block-img block-bailiff"></div>
          <p>Специалисты компании «Правый берег» могут обеспечить соблюдение ваших прав и защиту интересов в рамках исполнительного производства, сэкономят ваше время и избавят от необходимости взаимодействовать с судебными  приставами-исполнителями.</p>
          <p>Наши юристы:</p>
          <ul>
            <li>Подробно проконсультируют вас устно или письменно по вопросам, возникающих в ходе исполнительного производства;</li>
            <li>Обеспечат реализацию всех прав на стороне взыскателя;</li>
            <li>Защитят ваши интересы как должника;</li>
            <li>Подготовят жалобу на действия судебного пристава-исполнителя;</li>
          </ul>
          <div style={{ textAlign: "center" }}><FeedbackForm defaultCategory="Исполнительное производство" /></div>
        </div>
      </div>
    </div>
  );
}

export default Component;
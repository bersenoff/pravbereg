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
          <div className="page-title">Представительство в суде и в государственных органах</div>
          <div className="block-img block-court"></div>
          <p>Существующий на сегодняшний день массив законов не позволяет обычному человеку достоверно знать и понимать свои права, возможности и обязанности.</p>
          <p>Именно поэтому часто принимается решение, противоречащее существующему закону, что может повлечь негативные последствия.</p>
          <p>Юристы нашей компании:</p>
          <ul>
            <li>Подробно проконсультируют вас устно или письменно по любым вопросам, возникающим в различных жизненных ситуациях;</li>
            <li>Совместно с вами разработают правовую позицию и представят ваши интересы в суде или государственных органах;</li>
            <li>Обеспечат участие в судебных заседаниях (в т.ч. техническое участие в судебных заседаниях при наличии подготовленных документов);</li>
          </ul>
          <div style={{ textAlign: "center" }}><FeedbackForm defaultCategory="Представительство в суде и в государственных органах" /></div>
        </div>
      </div>
    </div>
  );
}

export default Component;
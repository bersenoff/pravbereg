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
          <div className="page-title">Взыскание долгов</div>
          <div className="block-img block-debts"></div>
          <p>Взыскание задолженности является актуальным как для физических, так и для юридических лиц. Как показывает практика, претензионная работа с должниками не всегда является эффективной, а самостоятельное взыскание долгов в суде зачастую является затруднительным.</p>
          <p>Специалисты компании «Правый берег» помогут вам защитить свои права и законные интересы и как кредитора, и как должника.</p>
          <p>Виды услуг:</p>
          <ul>
            <li>претензионная работа;</li>
            <li>преставление интересов в суде по спорам о взыскании задолженности;</li>
            <li>споры с кредитными организациями;</li>
          </ul>
          <div style={{ textAlign: "center" }}><FeedbackForm defaultCategory="Взыскание долгов" /></div>
        </div>
      </div>
    </div>
  );
}

export default Component;
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
          <div className="page-title">Семья</div>
          <div className="block-img block-family"></div>
          <p>На сегодняшний день споры, возникающие из брачно-семейных отношений, не теряют своей актуальности. В рамках рассмотрения таких споров приходится сталкиваться со множеством правовых нюансов, поэтому клиенту может понадобиться квалифицированная юридическая помощь.</p>
          <p>Юристы компании «Правый берег» подробно проконсультируют и представят ваши интересы в спорах, касающихся:</p>
          <ul>
            <li>Расторжение брака;</li>
            <li>Раздел общего имущества супругов;</li>
            <li>Определение места жительства ребенка, порядка общения с ребенком;</li>
            <li>Взыскание алиментов;</li>
            <li>Ограничение или лишение родительских прав, усыновление (удочерение) ребенка;</li>
            <li>Признание брака недействительным, установление или оспаривание отцовства;</li>
            <li>Подготовка соглашений о разделе имущества, брачного договора;</li>
            <li>Представление интересов в суде, органах опеки и попечительства;</li>
          </ul>
          <div style={{ textAlign: "center" }}><FeedbackForm defaultCategory="Семья" /></div>
        </div>
      </div>
    </div>
  );
}

export default Component;
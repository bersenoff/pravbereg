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
          <div className="page-title">Помощь при ДТП</div>
          <div className="block-img block-ra"></div>
          <p>Дорожно-транспортное происшествие — стрессовая ситуация для каждого человека. Специалисты компании «Правый берег» готовы предложить квалифицированную юридическую помощь в вопросах административной ответственности и страховых выплат.</p>
          <p>Урегулирование споров со страховыми компаниями не всегда заканчивается возмещением причиненного ущерба или качественным ремонтом.</p>
          <p>Виды услуг:</p>
          <ul>
            <li>устная или письменная консультация по вопросам, связанных со спорами с ГИБДД и страховыми компаниями;</li>
            <li>подготовка претензий в адрес страховых компаний;</li>
            <li>подготовка обращений в адрес финансового уполномоченного;</li>
            <li>представление интересов в суде по спорам со страховыми компаниями;</li>
            <li>защита прав автовладельцев в рамках дел об административных правонарушениях;</li>
          </ul>
          <div style={{ textAlign: "center" }}><FeedbackForm defaultCategory="Помощь при ДТП" /></div>
        </div>
      </div>
    </div>
  );
}

export default Component;
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
          <div className="page-title">Услуги адвоката по уголовным делам</div>
          <div className="block-img block-lawyer"></div>
          <p>Адвокат, специализирующийся на уголовном праве, может сопровождать расследование уголовного дела и присутствовать при совершении следственных действий. Чем раньше он приступит к своей работе, тем меньше шансов на неправомерные действия со стороны сотрудников правоохранительных органов власти, и на совершение процессуальных ошибок самим подзащитным.</p>
          <p>Квалифицированный адвокат по уголовному праву:</p> 
          <ul>
            <li>разработает совместно с вами линию защиты;</li>
            <li>вправе присутствовать при совершении следственных действий;</li>
            <li>взаимодействует с правоохранительными органами;</li>
            <li>защищает ваши права и законные интересы в суде;</li>
          </ul>
          <div style={{ textAlign: "center" }}><FeedbackForm defaultCategory="Услуги адвоката по уголовным делам" /></div>
        </div>
      </div>
    </div>
  );
}

export default Component;
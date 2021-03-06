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
          <div className="page-title">Бизнес</div>
          <div className="block-img block-business"></div>
          <p>Эффективное ведение бизнеса невозможно без грамотного юридического сопровождения. На протяжении длительного времени наша компания осуществляет абонентское обслуживание компаний и представляет интересы корпоративных клиентов во взаимоотношениях с контрагентами и контрольно-надзорными органами, а также сопровождает дела в суде.</p>
	        <p>Виды услуг:</p>
          <ul>
            <li>Консультирование по правовым вопросам, возникающим в ходе ведения бизнеса;</li>
            <li>Регистрация, ликвидация предприятий, внесение изменений в ЕГРЮЛ и учредительные документы;</li>
            <li>Абонентское обслуживание;</li>
            <li>Разработка локальных документов организации, хозяйственных договоров, правовой аудит корпоративных документов;</li>
            <li>Представление интересов в Федеральной антимонопольной службе;</li>
            <li>Защита прав бизнеса в рамках контрольно-надзорных мероприятий, обжалование действий органов власти, обжалование нормативно-правовых актов;</li>
            <li>Представление интересов в суде по корпоративным, хозяйственным спорам;</li>
          </ul>
          <div style={{ textAlign: "center" }}><FeedbackForm defaultCategory="Бизнес" /></div>
        </div>
      </div>
    </div>
  );
}

export default Component;
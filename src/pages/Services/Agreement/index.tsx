import React, { useEffect } from "react";

const Component: React.FunctionComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="section">
      <div className="section-content">
        <div className="block-item service-info" style={{ width: "100%" }}>
          <div className="page-title">Подготовка договоров и составление исков</div>
          <div className="block-img block-agreement"></div>
            <p>Грамотно составленные судебные документы – это один из самых важных этапов при рассмотрении дела. Наши специалисты имеют большой опыт в подготовке любых видов юридических документов от простых договоров купли-продажи до надзорных жалоб в Верховный суд Российской Федерации.</p> 
            <p>Юристы нашей компании могут помочь вам в следующих ситуациях:</p>
            <ul>
              <li>Консультация по перечню необходимых документов;</li>
              <li>Подготовка и оформление договоров, деловой переписки;</li>
              <li>Составление исков, ходатайств, жалоб в суд;</li>
              <li>Подготовка обращений в государственные органы;</li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Component;
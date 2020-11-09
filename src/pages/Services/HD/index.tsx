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
          <div className="page-title">Жилищные споры</div>
          <div className="block-img block-hd"></div>
          <p>Жилищные споры зачастую являются конфликтными и не теряют своей актуальности на сегодняшний день. В рамках рассмотрения таких споров приходится сталкиваться со множеством правовых нюансов, поэтому клиенту может понадобиться квалифицированная юридическая помощь.</p>
          <p>Юристы компании «Правый берег» подробно проконсультируют и представят ваши интересы в спорах, касающихся:</p>
          <ul>
            <li>признания права пользования на жилое помещение</li>
            <li>выселения из жилых помещений;</li>
            <li>приватизации жилых помещений, признания права собственности;</li>
            <li>перевода помещений из жилого в нежилое, переустройства и перепланировки;</li>
            <li>деятельности ТСЖ, управляющих компаний;</li>
          </ul>
          <div style={{ textAlign: "center" }}><FeedbackForm defaultCategory="Жилищные споры" /></div>
        </div>
      </div>
    </div>
  );
}

export default Component;
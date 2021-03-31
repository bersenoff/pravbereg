import React from "react";
import { YandexMap } from "components";
import "./index.css";

const Component: React.FunctionComponent = () => {
  return (
    <div className="section" id="contacts">
      <div className="section-content">
        <div style={{ textAlign: "center" }}><div className="title-block"><i className="fas fa-address-book"></i> &nbsp; КОНТАКТЫ</div></div>
        <div className="contacts-flex-box">
          <div id="contacts-irkutsk" className="block-item block-contacts">
            <div className="block-title"><div className="block-title-text">Иркутск</div></div>
            <div className="contacts-items">
              <div className="contact-item"><i className="fas fa-phone"></i> +7 (3952) 722-401</div>
              <div className="contact-item"><i className="fas fa-envelope"></i> <a href="mailto:prabereg@yandex.ru">prabereg@yandex.ru</a></div>
            </div>
            <YandexMap address="ул.&nbsp;Терешковой,&nbsp;15Б,&nbsp;4&nbsp;этаж" coordinates={[52.279429, 104.255319]} />
          </div>
          <div id="contacts-peterburg" className="block-item block-contacts">
            <div className="block-title"><div className="block-title-text">Санкт-Петербург</div></div>
            <div className="contacts-items">
              <div className="contact-item"><i className="fas fa-phone"></i> +7 (902) 566-49-75</div>
              <div className="contact-item"><i className="fas fa-envelope"></i> <a href="mailto:prabereg@yandex.ru">prabereg@yandex.ru</a></div>
            </div>
            <YandexMap address="Невский&nbsp;проспект,&nbsp;78,&nbsp;3&nbsp;этаж,&nbsp;офис&nbsp;8" coordinates={[59.932879, 30.348594]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
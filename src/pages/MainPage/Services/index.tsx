import React, { useState } from "react";
import { FeedbackForm } from "../../../components";
import { Link } from "react-router-dom";
import "./index.css";

interface IProps {}

interface IState {}

const Component: React.FunctionComponent<IProps> = () => {
  return (
    <>
    <div className="section" id="services">
      <div className="section-content" style={{ paddingBottom: "1rem" }}>
        <div style={{ textAlign: "center" }}><div className="title-block"><i className="fas fa-tasks"></i> &nbsp; УСЛУГИ</div></div>
        <div className="block-list services-list">
          <div className="block-item block-item-service">
            <div className="block-title"><div className="block-title-text">Переговоры и медиация</div></div>
            <div className="block-img block-mediation"></div>
            <div className="block-btn"><Link  to="/uslugi/peregovory-i-mediaciya" className="primary-btn">Подробнее</Link></div>
          </div>

          <div className="block-item block-item-service">
            <div className="block-title"><div className="block-title-text">Подготовка договоров и составление исков</div></div>
            <div className="block-img block-agreement"></div>
            <div className="block-btn"><Link to="/uslugi/podgotovka-dogovorov-i-sostavlenie-iskov" className="primary-btn">Подробнее</Link></div>
          </div>

          <div className="block-item block-item-service">
            <div className="block-title"><div className="block-title-text">Представительство в суде и в государственных органах</div></div>
            <div className="block-img block-court"></div>
            <div className="block-btn"><Link to="/uslugi/predstavitelstvo-v-sude-i-v-gosudarstvennyh-organah" className="primary-btn">Подробнее</Link></div>
          </div>

          <div className="block-item block-item-service">
            <div className="block-title"><div className="block-title-text">Исполнительное производство</div></div>
            <div className="block-img block-bailiff"></div>
            <div className="block-btn"><Link to="/uslugi/ispolnitelnoe-proizvodstvo" className="primary-btn">Подробнее</Link></div>
          </div>

          <div className="block-item block-item-service">
            <div className="block-title"><div className="block-title-text">Работа</div></div>
            <div className="block-img block-work"></div>
            <div className="block-btn"><Link to="/uslugi/rabota" className="primary-btn">Подробнее</Link></div>
          </div>

          <div className="block-item block-item-service">
            <div className="block-title"><div className="block-title-text">Семья</div></div>
            <div className="block-img block-family"></div>
            <div className="block-btn"><Link to="/uslugi/semiya" className="primary-btn">Подробнее</Link></div>
          </div>

          <div className="block-item block-item-service">
            <div className="block-title"><div className="block-title-text">Недвижимость</div></div>
            <div className="block-img block-immovables"></div>
            <div className="block-btn"><Link to="/uslugi/nedvizhimost" className="primary-btn">Подробнее</Link></div>
          </div>

          <div className="block-item block-item-service">
            <div className="block-title"><div className="block-title-text">Наследство</div></div>
            <div className="block-img block-legacy"></div>
            <div className="block-btn"><Link to="/uslugi/nasledstvo" className="primary-btn">Подробнее</Link></div>
          </div>

          <div className="block-item block-item-service">
            <div className="block-title"><div className="block-title-text">Бизнес</div></div>
            <div className="block-img block-business"></div>
            <div className="block-btn"><Link to="/uslugi/biznes" className="primary-btn">Подробнее</Link></div>
          </div>

          <div className="block-item block-item-service">
            <div className="block-title"><div className="block-title-text">Взыскание долгов</div></div>
            <div className="block-img block-debts"></div>
            <div className="block-btn"><Link to="/uslugi/vzyskanie-dolgov" className="primary-btn">Подробнее</Link></div>
          </div>

          <div className="block-item block-item-service">
            <div className="block-title"><div className="block-title-text">Налоги</div></div>
            <div className="block-img block-taxes"></div>
            <div className="block-btn"><Link to="/uslugi/nalogi" className="primary-btn">Подробнее</Link></div>
          </div>

          <div className="block-item block-item-service">
            <div className="block-title"><div className="block-title-text">Банкротство</div></div>
            <div className="block-img block-bankruptcy"></div>
            <div className="block-btn"><Link to="/uslugi/bankrotstvo" className="primary-btn">Подробнее</Link></div>
          </div>

          <div className="block-item block-item-service">
            <div className="block-title"><div className="block-title-text">Защита прав потребителей</div></div>
            <div className="block-img block-crp"></div>
            <div className="block-btn"><Link to="/uslugi/zashchita-prav-potrebitelej" className="primary-btn">Подробнее</Link></div>
          </div>

          <div className="block-item block-item-service">
            <div className="block-title"><div className="block-title-text">Жилищные споры</div></div>
            <div className="block-img block-hd"></div>
            <div className="block-btn"><Link to="/uslugi/zhilishchnye-spory" className="primary-btn">Подробнее</Link></div>
          </div>

          <div className="block-item block-item-service">
            <div className="block-title"><div className="block-title-text">Помощь при ДТП</div></div>
            <div className="block-img block-ra"></div>
            <div className="block-btn"><Link to="/uslugi/pomoshch-pri-dtp" className="primary-btn">Подробнее</Link></div>
          </div>

          <div className="block-item block-item-service">
            <div className="block-title"><div className="block-title-text">Услуги адвоката по уголовным делам</div></div>
            <div className="block-img block-lawyer"></div>
            <div className="block-btn"><Link to="/uslugi/uslugi-advokata-po-ugolovnym-delam" className="primary-btn">Подробнее</Link></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Component;
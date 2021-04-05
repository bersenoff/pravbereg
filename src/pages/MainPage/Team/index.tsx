import React from "react";
import "./index.css";

const Component: React.FunctionComponent = () => {
  return (
    <div className="section" id="team">
      <div className="section-content">
        <div style={{ textAlign: "center" }}>
          <div className="title-block"><i className="fas fa-users"></i> &nbsp; Команда</div>
        </div>
        <div className="command-list">
          <div className="block-item">
            <div className="command-info-fullname">Чуруксаев Николай Васильевич</div>
            <div className="command-photo"><img src="/images/team/img8353.jpg" alt="" /></div>
            <div className="command-info">
              <p>Генеральный директор.</p>
              <p>В 1980 г. окончил Высшую школу МВД СССР в г. Хабаровск.</p>
              <p>1985-2011 гг. - служба в органах внутренних дел.</p>
              <p>Подполковник в отставке.</p>
              <p>С 2011 генеральный директор ООО "Охранное агенство Перун".</p>
              <p>2011-2017 гг. - советник по коммерческой безопасности ООО "Информационно-аналитический центр Протект".</p>
              <p>С 2017 г. генеральный директор ООО "Юридическая компания "Правый берег".</p>
            </div>
          </div>
          <div className="block-item">
            <div className="command-info-fullname">Власенко Радмила Николаевна</div>
            <div className="command-photo"><img src="/images/team/img8354.jpg" alt="" /></div>
            <div className="command-info">
                <p>Управляющий партнер.</p>
                <p>В 2003 г. окончила с отличием Юридический институт ИГУ.</p>
                <p>В 2009 г. окончила магистратуру Байкальского Государственного Университета и с отличием второе высшее образование по специальности "Бухучет, Анализ и Аудит".</p>
                <p>В 2013 г. окончила Аспирантуру Байкальского Государственного Университета.</p>
                <p>2002-2007 гг. - коммерческий директор Правового агенства Сибирь.</p>
                <p>2008-2017 гг. - генеральный директор ООО "Юридическая компания Правый берег".</p>
                <p>2017-2018 г. - руководитель департамента правовой работы Администрации г. Иркутска.</p>
                <p>С 2018 г. - управляющий партнер ООО "Юридическая компания Правый берег".</p>
                <p>В 2019 г. в Санкт-Петербургском Межбанковском институте получен статус арбитражного управляющего.</p>
                <p>Действующий медиатор.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
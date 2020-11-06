import React, { useEffect } from "react";

const Component: React.FunctionComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="section">
      <div className="section-content">
        <div className="block-item service-info" style={{ width: "100%" }}>
          <div className="page-title">Наследство</div>
          <div className="block-img block-legacy"></div>
          <p>Наследственные споры зачастую являются конфликтными и не теряют своей актуальности на сегодняшний день. В рамках рассмотрения таких споров приходится сталкиваться со множеством правовых нюансов, поэтому клиенту может понадобиться квалифицированная юридическая помощь.</p>
          <p>Юристы компании «Правый берег» подробно проконсультируют и представят ваши интересы в спорах, касающихся:</p>
          <ul>
            <li>Признания права на наследство;</li>
            <li>Защиты наследственных прав;</li>
            <li>Установления родства для принятия наследства;</li>
          </ul>
        </div>  
      </div>
    </div>
  );
}

export default Component;
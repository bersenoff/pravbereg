import React, { useEffect } from "react";

const Component: React.FunctionComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="section">
      <div className="section-content">
        <div className="block-item service-info" style={{ width: "100%" }}>
          <div className="page-title">Налоги</div>
          <div className="block-img block-taxes"></div>
          <p>На протяжении длительного времени наша компания осуществляет налоговое консультирование физических и юридических лиц, представляет интересы корпоративных клиентов во взаимоотношениях с Федеральной налоговой службой, а также сопровождает налоговые споры в суде.</p>
          <p>Виды услуг:</p>
          <ul>
            <li>консультирование по вопросам налогообложения;</li>
            <li>налоговая оптимизация;</li>
            <li>участие в налоговых проверках, обжалование действий налоговых органов;</li>
            <li>сопровождение налоговых споров в суде;</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Component;
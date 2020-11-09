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
          <div className="page-title">Банкротство</div>
          <div className="block-img block-bankruptcy"></div>
          <p>Приоритетным направлением деятельности нашей команды является сопровождение процедур банкротства физических и юридических лиц. Мы можем обеспечить защиту интересов как кредитора, так и должника в любых ситуациях.</p>
	        <p>Виды услуг:</p>
          <ul>
            <li>подготовка и подача заявления о признании должника банкротом;</li>
            <li>подготовка и подача заявления о включении в реестр требований кредиторов;</li>
            <li>представление интересов в суде по спорам об оспаривании сделок;</li>
            <li>представление интересов в суде по спорам о привлечении к субсидиарной ответственности;</li>
            <li>сопровождение процедуры банкротства на стороне должника или кредитора;</li>
            <li>защита прав арбитражных управляющих;</li>
          </ul>
          <div style={{ textAlign: "center" }}><FeedbackForm defaultCategory="Банкротство" /></div>
        </div>
      </div>
    </div>
  );
}

export default Component;
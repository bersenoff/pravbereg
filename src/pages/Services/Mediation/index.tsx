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
          <div className="page-title">Переговоры и медиация</div>
          <div className="block-img block-mediation"></div>
          <p>В ходе переговоров стороны могут урегулировать разногласия между собой и прийти к наиболее выгодному для обеих сторон решению.</p>
          <p>Мы можем принять участие в переговорах в качестве вашего представителя и обеспечить защиту ваших интересов.</p>
          <p>Также мы можем выступить квалифицированным медиатором-посредником и управлять переговорами таким образом, чтобы стороны добровольно и конфиденциально пришли к реалистичному и удовлетворяющему интересам обеих сторон соглашению, имеющему юридическую силу, в результате выполнения которого стороны урегулируют конфликт между собой.</p> 
          <p>Процедура медиации регламентирована законом. Ей можно воспользоваться в рамках разрешения семейных, гражданских и трудовых споров.</p>
          <div style={{ textAlign: "center" }}><FeedbackForm defaultCategory="Переговоры и медиация" /></div>
        </div>
      </div>
    </div>
  );
}

export default Component;
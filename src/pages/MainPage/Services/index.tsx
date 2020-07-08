import React, { useState } from "react";
import { Button } from "antd";
import { FeedbackForm } from "../../../components";
import "./index.css";

interface IState {
  visible: {
    feedback: boolean;
  }
}

const Component: React.FunctionComponent = () => {
  const [state, setState] = useState<IState>({
    visible: {
      feedback: false
    }
  });

  const { visible } = state;

  const handleFormVisible = () => {
    setState((s) => ({
      ...s,
      visible: {
        ...s.visible,
        feedback: !s.visible.feedback
      }
    }));
  }

  return (
    <>
    <FeedbackForm visible={visible.feedback} fnVisible={handleFormVisible} />
    <div id="section-services" className="section">
      <div className="section-content" style={{ paddingBottom: "1rem" }}>
        <div style={{ textAlign: "center" }}><div id="services-title">НАШИ УСЛУГИ</div></div>
        <div id="services-list">
          <div className="service-block">
            <div className="service-block-content">
              <div className="service-block-text">Комплексное правовое и бухгалтерское сопровождение бизнеса</div>
              <div className="service-block-btn">
                <Button type="primary" size="large" className="primary-btn" onClick={handleFormVisible}>Заказать</Button>
              </div>
            </div>
          </div>
          <div className="service-block">
            <div className="service-block-content">
              <div className="service-block-text">Услуги Управляющей компании</div>
              <div className="service-block-btn">
                <Button type="primary" size="large" className="primary-btn" onClick={handleFormVisible}>Заказать</Button>
              </div>
            </div>
          </div>
          <div className="service-block">
            <div className="service-block-content">
              <div className="service-block-text">Регистрация и ликвидация предприятий</div>
              <div className="service-block-btn">
                <Button type="primary" size="large" className="primary-btn" onClick={handleFormVisible}>Заказать</Button>
              </div>
            </div>
          </div>
          <div className="service-block">
            <div className="service-block-content">
              <div className="service-block-text">Внесение изменений и дополнений в учредительные документы, реорганизация</div>
              <div className="service-block-btn">
                <Button type="primary" size="large" className="primary-btn" onClick={handleFormVisible}>Заказать</Button>
              </div>
            </div>
          </div>
          <div className="service-block">
            <div className="service-block-content">
              <div className="service-block-text">Представление интересов клиента в государственных органах и учреждениях</div>
              <div className="service-block-btn">
                <Button type="primary" size="large" className="primary-btn" onClick={handleFormVisible}>Заказать</Button>
              </div>
            </div>
          </div>
          <div className="service-block">
            <div className="service-block-content">
              <div className="service-block-text">Споры с участием юридических лиц и государственных органов, арбитражные споры</div>
              <div className="service-block-btn">
                <Button type="primary" size="large" className="primary-btn" onClick={handleFormVisible}>Заказать</Button>
              </div>
            </div>
          </div>
          <div className="service-block">
            <div className="service-block-content">
              <div className="service-block-text">Полное сопровождение процедуры банкротства</div>
              <div className="service-block-btn">
                <Button type="primary" size="large" className="primary-btn" onClick={handleFormVisible}>Заказать</Button>
              </div>
            </div>
          </div>
          <div className="service-block">
            <div className="service-block-content">
              <div className="service-block-text">Содействие в получении лицензии</div>
              <div className="service-block-btn">
                <Button type="primary" size="large" className="primary-btn" onClick={handleFormVisible}>Заказать</Button>
              </div>
            </div>
          </div>
          <div className="service-block">
            <div className="service-block-content">
              <div className="service-block-text">Согласование СЭС, УГПС, УАиГ, КУМИ и пр.</div>
              <div className="service-block-btn">
                <Button type="primary" size="large" className="primary-btn" onClick={handleFormVisible}>Заказать</Button>
              </div>
            </div>
          </div>
          <div className="service-block">
            <div className="service-block-content">
              <div className="service-block-text">Юридическое сопровождение внешнеэкономической деятельности и перевозок</div>
              <div className="service-block-btn">
                <Button type="primary" size="large" className="primary-btn" onClick={handleFormVisible}>Заказать</Button>
              </div>
            </div>
          </div>
          <div className="service-block">
            <div className="service-block-content">
              <div className="service-block-text">Оформление прав собственности или аренды на земельные участки и другие объекты недвижимости</div>
              <div className="service-block-btn">
                <Button type="primary" size="large" className="primary-btn" onClick={handleFormVisible}>Заказать</Button>
              </div>
            </div>
          </div>
          <div className="service-block">
            <div className="service-block-content">
              <div className="service-block-text">Вопросы семейного законодательства</div>
              <div className="service-block-btn">
                <Button type="primary" size="large" className="primary-btn" onClick={handleFormVisible}>Заказать</Button>
              </div>
            </div>
          </div>
          <div className="service-block">
            <div className="service-block-content">
              <div className="service-block-text">Содействие в оформлении завещания и получении наследства</div>
              <div className="service-block-btn">
                <Button type="primary" size="large" className="primary-btn" onClick={handleFormVisible}>Заказать</Button>
              </div>
            </div>
          </div>
          <div className="service-block">
            <div className="service-block-content">
              <div className="service-block-text">Разрешение жилищных, трудовых споров</div>
              <div className="service-block-btn">
                <Button type="primary" size="large" className="primary-btn" onClick={handleFormVisible}>Заказать</Button>
              </div>
            </div>
          </div>
          <div className="service-block">
            <div className="service-block-content">
              <div className="service-block-text">Административные дела: ДТП, н/с</div>
              <div className="service-block-btn">
                <Button type="primary" size="large" className="primary-btn" onClick={handleFormVisible}>Заказать</Button>
              </div>
            </div>
          </div>
          <div className="service-block">
            <div className="service-block-content">
              <div className="service-block-text">Споры со страховыми компаниями</div>
              <div className="service-block-btn">
                <Button type="primary" size="large" className="primary-btn" onClick={handleFormVisible}>Заказать</Button>
              </div>
            </div>
          </div>
          <div className="service-block">
            <div className="service-block-content">
              <div className="service-block-text">Консультации по вопросам уголовного права</div>
              <div className="service-block-btn">
                <Button type="primary" size="large" className="primary-btn" onClick={handleFormVisible}>Заказать</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Component;
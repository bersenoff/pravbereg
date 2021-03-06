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
          <div className="page-title">Защита прав потребителей</div>
          <div className="block-img block-crp"></div>
          <p>Вопросы, возникающие в сфере защиты прав потребителей, не теряют своей актуальности.</p>
          <p>Каждый из нас может приобрести некачественный товар, а услуга может быть оказана с недостатками.</p>
          <p>Решение этой проблемы не всегда заканчивается возвратом денежных средств или заменой товара в добровольном порядке. Специалисты компании «Правый берег» изучат имеющиеся документы, проконсультируют вас и предложат наиболее оптимальный вариант решения вашей проблемы.</p>
          <p>Виды услуг:</p>
          <ul>
            <li>Устная или письменная консультация по вопросам, связанными с защитой прав потребителей;</li>
            <li>Подготовка претензий в адрес продавца о замене товара или возврата денежных средств;</li>
            <li>Представление интересов в суде по спорам данной категории дел;</li>
          </ul>
          <div style={{ textAlign: "center" }}><FeedbackForm defaultCategory="Защита прав потребителей" /></div>
        </div>
      </div>
    </div>
  );
}

export default Component;
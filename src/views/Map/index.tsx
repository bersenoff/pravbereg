import React from "react";
import "./index.css";

const Component: React.FunctionComponent = () => {
  return (
    <div className="section" id="contacts">
      <div className="section-content">
        <div style={{ textAlign: "center" }}><div className="title-block"><i className="fas fa-address-book"></i> &nbsp; КОНТАКТЫ</div></div>
        <div className="block-item block-contacts" style={{ textAlign: "center", marginTop: "1rem" }}>
          <ul>
            <li><i className="fas fa-map-marker"></i> г. Иркутск, ул. Терешковой 15 "Б", 4 этаж</li>
            <li><i className="fas fa-phone"></i> +7 (3952) 722-401</li>
            <li><i className="fas fa-envelope"></i> <a href="mailto:prabereg@yandex.ru">prabereg@yandex.ru</a></li>
          </ul>
        </div>
        <div style={{ position: "relative", overflow: "hidden", marginTop: "2rem" }}><a href="https://yandex.ru/maps/63/irkutsk/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute",  top: "0px" }}>Иркутск</a><a href="https://yandex.ru/maps/63/irkutsk/house/ulitsa_tereshkovoy_15b/ZUkCaAVlTEYGVUJvYWJzdnVnZgE=/?ll=104.252835%2C52.279429&utm_medium=mapframe&utm_source=maps&z=16.73" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>Улица Терешковой, 15Б — Яндекс.Карты</a><iframe src="https://yandex.ru/map-widget/v1/-/CCQtA2Ds8D" frameBorder={1} allowFullScreen={true} className="map-iframe"></iframe></div>
      </div>
    </div>
  );
}

export default Component;
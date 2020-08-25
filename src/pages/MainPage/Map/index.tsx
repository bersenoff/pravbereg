import React from "react";
import "./index.css";

const Component: React.FunctionComponent = () => {
  return (
    <div className="section" style={{ marginTop: "-1rem" }}>
      <div className="section-content">
        <div style={{ textAlign: "center" }}><div className="title-block"><i className="fas fa-map-marker-alt"></i> &nbsp; МЫ НА КАРТЕ</div></div>
        <div style={{ position: "relative", overflow: "hidden", marginTop: "1rem" }}><a href="https://yandex.ru/maps/63/irkutsk/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute",  top: "0px" }}>Иркутск</a><a href="https://yandex.ru/maps/63/irkutsk/house/ulitsa_tereshkovoy_15b/ZUkCaAVlTEYGVUJvYWJzdnVnZgE=/?ll=104.252835%2C52.279429&utm_medium=mapframe&utm_source=maps&z=16.73" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>Улица Терешковой, 15Б — Яндекс.Карты</a><iframe src="https://yandex.ru/map-widget/v1/-/CCQtA2Ds8D" frameBorder={1} allowFullScreen={true} className="map-iframe"></iframe></div>
      </div>
    </div>
  );
}

export default Component;
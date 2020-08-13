import React from "react";

const Component: React.FunctionComponent = () => {
  return (
    <div className="section">
      <div style={{ position: "relative", overflow: "hidden" }}><a href="https://yandex.ru/maps/63/irkutsk/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute",  top: "0px" }}>Иркутск</a><a href="https://yandex.ru/maps/63/irkutsk/house/ulitsa_tereshkovoy_15b/ZUkCaAVlTEYGVUJvYWJzdnVnZgE=/?ll=104.252835%2C52.279429&utm_medium=mapframe&utm_source=maps&z=16.73" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>Улица Терешковой, 15Б — Яндекс.Карты</a><iframe src="https://yandex.ru/map-widget/v1/-/CCQtA2Ds8D" frameBorder={1} allowFullScreen={true} style={{ position: "relative", width: "100%", height: "100vh" }}></iframe></div>
    </div>
  );
}

export default Component;
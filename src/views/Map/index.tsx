import React from "react";
import "./index.css";

const Component: React.FunctionComponent = () => {
  return (
    <div className="section" id="contacts">
      <div className="section-content">
        <div style={{ textAlign: "center" }}><div className="title-block"><i className="fas fa-address-book"></i> &nbsp; КОНТАКТЫ</div></div>
        <div id="contacts-irkutsk" className="block-item block-contacts">
          <div className="block-title"><div className="block-title-text">Иркутск</div></div>
          <ul>
            <li><i className="fas fa-map-marker"></i> г. Иркутск, ул. Терешковой 15 "Б", 4 этаж</li>
            <li><i className="fas fa-phone"></i> +7 (3952) 722-401</li>
            <li><i className="fas fa-envelope"></i> <a href="mailto:prabereg@yandex.ru">prabereg@yandex.ru</a></li>
          </ul>
          <div style={{ position: "relative", overflow: "hidden", marginTop: "1rem" }}><a href="https://yandex.ru/maps/63/irkutsk/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute",  top: "0px" }}>Иркутск</a><a href="https://yandex.ru/maps/63/irkutsk/house/ulitsa_tereshkovoy_15b/ZUkCaAVlTEYGVUJvYWJzdnVnZgE=/?ll=104.252835%2C52.279429&utm_medium=mapframe&utm_source=maps&z=16.73" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>Улица Терешковой, 15Б — Яндекс.Карты</a><iframe src="https://yandex.ru/map-widget/v1/-/CCQtA2Ds8D" allowFullScreen={true} className="map-iframe"></iframe></div>
        </div>
        <div id="contacts-peterburg" className="block-item block-contacts">
          <div className="block-title"><div className="block-title-text">Санкт-Петербург</div></div>
          <ul>
            <li><i className="fas fa-map-marker"></i>г. Санкт-Петербург, Невский проспект, 78, 3 этаж, офис 8</li>
            <li><i className="fas fa-phone"></i> —</li>
            <li><i className="fas fa-envelope"></i> <a href="mailto:prabereg@yandex.ru">prabereg@yandex.ru</a></li>
          </ul>
          <div style={{ position: "relative", overflow: "hidden", marginTop: "1rem" }}><a href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: 0 }}>Санкт‑Петербург</a><a href="https://yandex.ru/maps/2/saint-petersburg/house/nevskiy_prospekt_78/Z0kYdQNoTEwDQFtjfXVyc3RkbQ==/?ll=30.348593%2C59.932879&utm_medium=mapframe&utm_source=maps&z=16.73" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>Невский проспект, 78 — Яндекс.Карты</a><iframe src="https://yandex.ru/map-widget/v1/?ll=30.348593%2C59.932879&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fll%3D30.349%252C59.933%26spn%3D0.001%252C0.001%26text%3D%25D0%25A0%25D0%25BE%25D1%2581%25D1%2581%25D0%25B8%25D1%258F%252C%2520%25D0%25A1%25D0%25B0%25D0%25BD%25D0%25BA%25D1%2582-%25D0%259F%25D0%25B5%25D1%2582%25D0%25B5%25D1%2580%25D0%25B1%25D1%2583%25D1%2580%25D0%25B3%252C%2520%25D0%259D%25D0%25B5%25D0%25B2%25D1%2581%25D0%25BA%25D0%25B8%25D0%25B9%2520%25D0%25BF%25D1%2580%25D0%25BE%25D1%2581%25D0%25BF%25D0%25B5%25D0%25BA%25D1%2582%252C%252078&z=16.73" allowFullScreen={true} className="map-iframe"></iframe></div>
        </div>
        <div style={{ clear: "both" }}></div>
        {/* <div className="block-item block-contacts" style={{ textAlign: "center", marginTop: "1rem" }}>
          <ul>
            <li><i className="fas fa-map-marker"></i> г. Иркутск, ул. Терешковой 15 "Б", 4 этаж</li>
            <li><i className="fas fa-phone"></i> +7 (3952) 722-401</li>
            <li><i className="fas fa-envelope"></i> <a href="mailto:prabereg@yandex.ru">prabereg@yandex.ru</a></li>
          </ul>
        </div>
        <div style={{ position: "relative", overflow: "hidden", marginTop: "2rem" }}><a href="https://yandex.ru/maps/63/irkutsk/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute",  top: "0px" }}>Иркутск</a><a href="https://yandex.ru/maps/63/irkutsk/house/ulitsa_tereshkovoy_15b/ZUkCaAVlTEYGVUJvYWJzdnVnZgE=/?ll=104.252835%2C52.279429&utm_medium=mapframe&utm_source=maps&z=16.73" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>Улица Терешковой, 15Б — Яндекс.Карты</a><iframe src="https://yandex.ru/map-widget/v1/-/CCQtA2Ds8D" frameBorder={1} allowFullScreen={true} className="map-iframe"></iframe></div> */}
      </div>
    </div>
  );
}

export default Component;
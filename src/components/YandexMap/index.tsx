import React from "react";
import { Map, YMaps, YMapsApi } from "react-yandex-maps";
import "./index.css";

interface IProps {
  coordinates: [number, number],
  address: string
}

const Component: React.FunctionComponent<IProps> = ({ coordinates, address }) => {
  const mapState = {
    center: coordinates,
    zoom: 17
  }

  let map: any = null;

  const onLoad = (ymaps: YMapsApi) => {
    const icon = ymaps.templateLayoutFactory.createClass(`
      <div class="ymap_icon">{{ properties.caption }}</div>
    `);

    const placemark = new ymaps.Placemark(coordinates, { caption: address }, { iconLayout: icon });
    map.geoObjects.add(placemark);
  }

  return (
    <YMaps query={{ load: "package.full" }}>
      <Map 
        state={mapState}
        className="yandex_map"
        instanceRef={(ref) => map = ref}
        onLoad={onLoad}
      >
      </Map>
    </YMaps>
  )
}

export default Component;
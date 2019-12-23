import React, { useState } from 'react';
import { Marker, Map, TileLayer, Popup, Tooltip } from 'react-leaflet';
import { leafletIcons } from '../../images';
import InfoWindowDetail from '../InfoWindowDetail';
import './leaflet.css';
import './styles.scss';
const popup = React.createRef();

const GuttersnipeMap = ({ shareables, center, zoom }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [currentPopup, setCurrentPopup] = useState(null);

  const position = [center.lat, center.lng];
  return (
    <Map className="map" center={position} zoom={zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {shareables &&
        shareables.map((place, index) => {
          const {coordinates, type, name} = place;
          if(!coordinates || ! Array.isArray(coordinates) || coordinates.length !== 2) {
            return ("");
          }
          const markerPosition = [coordinates[1], coordinates[0]];
          function closePopup() {
            popup.current.leafletElement.options.leaflet.map.closePopup();
          }
          return (
            <Marker
              key={index}
              position={markerPosition}
              label={''}
              icon={leafletIcons[type]}
              onClick={() => setSelectedPlace(place)}
            >
              <Tooltip>{name}</Tooltip>
              <Popup ref={popup}>
                <InfoWindowDetail {...selectedPlace} />
                <div
                  className="map-popup-close-btn"
                  onClick={closePopup}
                >
                  CERRAR
                </div>
              </Popup>
            </Marker>
          );
        })}
    </Map>
  );
};

export default GuttersnipeMap;

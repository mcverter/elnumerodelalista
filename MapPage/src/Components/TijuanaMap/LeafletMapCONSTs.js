import React, {useState} from "react";
import {Marker, Map, TileLayer, Popup, Tooltip} from 'react-leaflet';
import {leafletIcons} from "../../images/index";
import InfoWindowDetail from "../InfoWindowDetail"
import {shareables, center, zoom} from './constants';

const LeafletMapCONSTs = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  //       defaultCenter={{...center}}

  const position = [center.lat, center.lng]
  return (
    <Map className="map" center={position} zoom={zoom}>
      <TileLayer  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {shareables.map((place, index) => {
        const markerPosition = [place.coordinates[1], place.coordinates[0]];
        return (
          <Marker
            key={index}
            position={markerPosition}
            label={""}
            icon={leafletIcons[place.type]}
            onClick={() => setSelectedPlace(place)}
          >
            <Tooltip>{place.name}</Tooltip>
            <Popup>
              <div id="foobar">
                <InfoWindowDetail {...selectedPlace} />
              </div>
            </Popup>
          </Marker>
        )})}
    </Map>
  );
}

export default LeafletMapCONSTs;

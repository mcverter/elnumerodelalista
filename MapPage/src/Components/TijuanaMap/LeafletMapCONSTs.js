import React, {useState} from "react";
import {Marker, Map, TileLayer, Popup, Tooltip} from 'react-leaflet';
import images from "../../images/index";
import InfoWindowDetail from "../InfoWindowDetail"
import {shareables, center, zoom} from './constants';

const LeafletMapCONSTs = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  //       defaultCenter={{...center}}

  const position = [center.lat, center.lng]
  return (
    <Map style={{height: "100%", width: "100%"}} center={position} zoom={zoom}>
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
            icon={images[place.type]}
            onClick={() => setSelectedPlace(place)}
          >
            <Tooltip>{place.name}</Tooltip>
            <Popup style={{width: "80%"}}>
              <div>
                <InfoWindowDetail {...selectedPlace} />
              </div>
            </Popup>
          </Marker>
        )})}
    </Map>
  );
}

const Styles = {
  closeButton: {
    backgroundColor: "darkblue",
    textAlign: "center",
    color: "white",
    fontWeight: 700,
    fontSize: "150%",
    padding: "10px",
    margin: "15px auto",
    border: "1px solid white",
    borderRadius: "5px",
    width: "50%"
  }
}
export default LeafletMapCONSTs;

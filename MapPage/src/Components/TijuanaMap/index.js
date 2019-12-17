import React, {useState, useEffect} from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";
import imageMap from "../../images/index";
import axios from 'axios';
// Should be passed in as prop
import {placemarks} from "../../data/tj";
import InfoWindowDetail from "../InfoWindowDetail"

const TJ_ARCH_COORDS = {lat: 32.5364307, lng:-117.037085};
const DEFAULT_ZOOM = 12;


function TijuanaMap() {
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <GoogleMap
      defaultZoom={DEFAULT_ZOOM}
      defaultCenter={{lat: TJ_ARCH_COORDS.lat, lng: TJ_ARCH_COORDS.lng}}
      defaultOptions={{mapTypeControl: false}}
    >
      {placemarks.map((place, index) => {
        return (
        <Marker
          key={index}
          position={{
            lat: place.coordinates[1],
            lng: place.coordinates[0]
          }}
          label={""/*place.name*/}
          icon={imageMap[place.type]}
          onClick={() => setSelectedPlace(place)}
        />
      )})}
      {
        selectedPlace && (
          <InfoWindow
            onCloseClick={()=>setSelectedPlace(null)}
            position={{
              lat: selectedPlace.coordinates[1],
              lng: selectedPlace.coordinates[0]
            }}
          >
            <div>
            <InfoWindowDetail {...selectedPlace} />
            <div style={Styles.closeButton} onClick={()=>setSelectedPlace(null)}>CERRAR</div>
            </div>
          </InfoWindow>
        )
      }
    </GoogleMap>
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
};

export default withScriptjs(withGoogleMap(TijuanaMap));

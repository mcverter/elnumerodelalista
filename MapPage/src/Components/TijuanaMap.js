import React, {useState, useEffect} from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";
import imageMap from "../images";
import axios from 'axios';

// Should be passed in as prop
import {placemarks} from "../data/tj";
import InfoWindowDetail from "./InfoWindowDetail"

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
     //   console.log(place);
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
            <div style={{backgroundColor: "red", color: "white", fontWeight: 700, fontSize: "150%", padding: "10px", margin: "5px", border: "1px solid white"}} onClick={()=>setSelectedPlace(null)}>CERRAR</div>
            </div>
          </InfoWindow>

        )
      }
    </GoogleMap>
  );
}

export default withScriptjs(withGoogleMap(TijuanaMap));

import React, {useState} from "react";
import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
import * as parkData from "../data/example";
import {withGoogleMap, withScriptjs} from "react-google-maps";

function Map() {
  const [selectedPark, setSelectedPark] = useState(null);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
    >
      {parkData.features.map(park => (
        <Marker
          key={park.properties.PARK_ID}
          position={{
            lat: park.geometry.coordinates[1],
            lng: park.geometry.coordinates[0]
          }}
          icon={{
            url: `/skateboarding.svg`,
            scaledSize: new window.google.maps.Size(25, 25)
          }}
          onClick={() => setSelectedPark(park)}
        />
      ))}

      {selectedPark && (
        <InfoWindow
          onCloseClick={()=>setSelectedPark(null)}
          position={{
            lat: selectedPark.geometry.coordinates[1],
            lng: selectedPark.geometry.coordinates[0]
          }}
        >
          <div>
            <h2>{selectedPark.properties.NAME}</h2>
            <p>{selectedPark.properties.DESCRIPTION}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

export default withScriptjs(withGoogleMap(Map));

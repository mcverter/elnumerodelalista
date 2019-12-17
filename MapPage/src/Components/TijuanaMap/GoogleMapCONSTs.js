import React, {useState} from "react";
import {GoogleMap, Marker, InfoWindow, withGoogleMap, withScriptjs} from "react-google-maps";
import images from "../../images/index";
import InfoWindowDetail from "../InfoWindowDetail"
import {shareables, center, zoom} from './constants';

const GuttersnipeMapRetry = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  //       defaultCenter={{...center}}

  return (
    <GoogleMap
      defaultZoom={zoom}
      defaultCenter={{lat: center.lat, lng: center.lng}}
      defaultOptions={{mapTypeControl: false}}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}

    >
      {shareables.map((place, index) => {
        return (
          <Marker
            key={index}
            position={{
              lat: place.coordinates[1],
              lng: place.coordinates[0]
            }}
            label={""/*place.name*/}
            icon={images[place.type]}
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

export default withScriptjs(withGoogleMap(GuttersnipeMapRetry));

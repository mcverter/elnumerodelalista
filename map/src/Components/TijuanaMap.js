
import React, {useState} from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";
import shelterIcon from "../images/shelter.png";
import foodIcon from "../images/food.png";
import medicineIcon from "../images/medicine.png";
// Should be passed in as prop
import {placemarks} from "../data/tj";

const icons = {
  shelter: shelterIcon,
  food: foodIcon,
  medicine: medicineIcon
};


const TJ_ARCH_COORDS = {lat: 32.5364307, lng:-117.037085};
const DEFAULT_ZOOM = 12;

function TijuanaMap() {
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <GoogleMap
      defaultZoom={DEFAULT_ZOOM}
      defaultCenter={{lat: TJ_ARCH_COORDS.lat, lng: TJ_ARCH_COORDS.lng}}
    >
      {placemarks.map((place, index) => (
        <Marker
          key={index}
          position={{
            lat: place.coordinates[1],
            lng: place.coordinates[0]
          }}
          label={""/*place.name*/}
          icon={icons[place.type]}
          onClick={() => setSelectedPlace(place)}
        />
      ))}
      {
        selectedPlace && (
          <InfoWindow
            onCloseClick={()=>selectedPlace(null)}
            position={{
              lat: selectedPlace.coordinates[1],
              lng: selectedPlace.coordinates[0]
            }}
          >
            <div>
              <h2>{selectedPlace.name}</h2>
              <p>{selectedPlace.description}</p>
            </div>
          </InfoWindow>
        )
      }
    </GoogleMap>
  );
}

export default withScriptjs(withGoogleMap(TijuanaMap));

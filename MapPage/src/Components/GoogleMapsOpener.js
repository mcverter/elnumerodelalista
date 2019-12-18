import React from 'react';
import PropTypes from 'prop-types';

const GoogleMapsOpener = (place) => {
  const {coordinates, google_place_id, name, address} = place;
  console.log("place", place);
  const openGoogleMaps = () => {
    const placeOnly = () => {
      let placeURL = `https://www.google.com/maps/search/?api=1&query=${coordinates[1]},${coordinates[0]}`;
      if (google_place_id) {
        placeURL += `&query_place_id=${encodeURIComponent(google_place_id)}`;
      }
      window.open(placeURL, "_blank");
    };

    const directionsFromTo = ({fromLat, fromLng}) => {
      let directionsURL = `https://www.google.com/maps/dir/?api=1&origin=${fromLat},${fromLng}&destination=${encodeURIComponent(name)}+${encodeURIComponent(address)}`;  //${coordinates[1]},${coordinates[0]}`;
      if (google_place_id) {
        console.log("gpi", google_place_id)
        directionsURL += `&destination_id=${encodeURIComponent(google_place_id)}`;
      }
      window.open(directionsURL, "_blank")
    };

    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
      return placeOnly();
    } else {
      console.log('Locating…');
      navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
      return directionsFromTo({fromLat: latitude, fromLng: longitude});
    }

    function error() {
      console.log('Unable to retrieve your location');
      return placeOnly();
    }
  };

  return (
    <div className="google-opener" onClick={()=>{openGoogleMaps()}}>
      DIRECCIONES
    </div>
  );
};

GoogleMapsOpener.propTypes = {
};

export default GoogleMapsOpener;



/*
https://www.google.com/maps/place/Desayunador+Salesiano+Padre+Chava/@32.5367559,-117.0343147,17z/data=!3m1!4b1!4m5!3m4!1s0x80d948ffde2a22e5:0x82eab14fd2e2297d!8m2!3d32.5367559!4d-117.032126
 */
//window.location = `https://www.google.com/maps/place/${encodeURIComponent(name)}+${encodeURIComponent(address)}/@${coordinates[1]},${coordinates[0]},14z`
//window.location = `https://www.google.com/maps/dir/?api=1&origin=${fromLat},${fromLng}&destination=${coordinates[1]},${coordinates[0]}&destination_id=${encodeURIComponent(name)}+${encodeURIComponent(address)}`

/*
https://www.google.com/maps/dir/14.9123116,-92.2635103/Siglo+XXI,+parque+central,+Central,+Los+Naranjos,+30700+Tapachula+de+C%C3%B3rdova+y+Ordo%C3%B1ez,+Chis./@14.9292407,-92.2752977,14z/data=!3m1!4b1!4m17!1m6!3m5!1s0x858e098df27da3b5:0x44443d04cfe2ce32!2sSiglo+XXI!8m2!3d14.9462863!4d-92.2521342!4m9!1m1!4e1!1m5!1m1!1s0x858e098df27da3b5:0x44443d04cfe2ce32!2m2!1d-92.2521342!2d14.9462863!3e2

https://www.google.com/maps/dir/Octava+Avenida+Norte+33,+Centro,+Tapachula+de+C%C3%B3rdova+y+Ordo%C3%B1ez,+Chis./Siglo+XXI,+parque+central,+Central,+Los+Naranjos,+30700+Tapachula+de+C%C3%B3rdova+y+Ordo%C3%B1ez,+Chis./@14.9293264,-92.2755073,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x858e0f276e3a37a9:0x7a1b217ebcb7762!2m2!1d-92.2638569!2d14.9123679!1m5!1m1!1s0x858e098df27da3b5:0x44443d04cfe2ce32!2m2!1d-92.2521342!2d14.9462863!3e2


https://www.google.com/maps/place/Imprenta+San+Francisco/@32.5367439,-117.0343983,17z/data=!4m18!1m12!4m11!1m3!2m2!1d-117.032126!2d32.5367559!1m6!1m2!1s0x80d948ffde2aaa75:0x76c24da98d0e9bdb!2sAv+Melchor+Ocampo+700,+Zona+Urbana+Rio+Tijuana,+22010+Tijuana,+B.C.!2m2!1d-117.0321455!2d32.5367457!3m4!1s0x0:0x27558035b683766a!8m2!3d32.5365687!4d-117.0342388
 */
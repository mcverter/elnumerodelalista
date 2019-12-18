import React from 'react';
import GuttersnipeMap from "./Components/TijuanaMap/index";
import './App.scss';
import {GOOGLE_API_KEY} from './config';
import {hot} from 'react-hot-loader';

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <GuttersnipeMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          GOOGLE_API_KEY
          }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default hot(module)(App);

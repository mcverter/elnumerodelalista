import React from 'react';
import ExampleMap from "./Components/TijuanaMap";
import './App.css';
import {GOOGLE_API_KEY} from './config';

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ExampleMap
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

export default App;

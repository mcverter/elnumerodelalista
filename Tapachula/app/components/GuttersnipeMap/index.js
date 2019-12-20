import React from 'react';
import GuttersnipeMap from './GuttersnipeMap';
import {shareables, center, zoom} from './constants';

const SpecificMap = () => (
  <GuttersnipeMap shareable={shareables} center={center} zoom={zoom}/>
)

export default SpecificMap;

/**
 *
 * Tijuana
 *
 */

import React from 'react';
import GuttersnipeMap  from '../../components/GuttersnipeMap';
import PropTypes from 'prop-types';
import {placemarks as shareables} from './tapachula.json';

export default function Tijuana() {
  const center = { lat: 32.5364307, lng: -117.037085 };
  const zoom = 12;

  return (
    <GuttersnipeMap
      style={{ height: '100%', width: '100%' }}
      shareables={shareables}
      center={center}
      zoom={zoom}
    />
  );
}

Tijuana.propTypes = {};

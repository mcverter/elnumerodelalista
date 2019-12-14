import React from 'react';
import {InfoWindow} from 'react-google-maps'
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import phoneImage from "../images/phone.svg";

const InfoWindowDetail = ({
                           name,
                           setSelectedPlace,
                           type,
                           coordinates,
                           description,
                           phone1,
                           phone2,
                           address,
                           notes
                         }) => {
 // debugger
/*
        {phone2 &&      <div>{phone2}</div>}
        {notes  &&      <div>{notes}</div>}

 */
  console.log( name,
//    setSelectedPlace,
//    type,
//    coordinates,
    description,
    phone1,
    phone2,
    address,
    notes);
  return (
      <div style={Styles.detailsDiv}>
        {name &&        <h1>{name}</h1>}
        {address &&     <div>{address}</div>}
        {description && ReactHtmlParser(description)}
        {phone1 &&      <div><span><img src={phoneImage}/></span><a href={'"tel:+52' + phone1 + '"'}>+52{phone1}</a></div>}
        {phone2 &&      <div><span></span><a href={'"tel:+52' + phone2 + '"'}>+52{phone2}</a></div>}
        {notes && ReactHtmlParser(notes)}
      </div>
  );
};

const Styles = {
  detailsDiv: {},
  name: {},
  type: {},
  coordinates: {} ,
  description: {},
  phone1: {},
  phone2: {},
  address: {},
  notes: {}
};

InfoWindowDetail.propTypes = {
  /* name,
  type,
  coordinates,
  description,
  phone1,
  phone2,
  address,
  notes */
};

export default InfoWindowDetail;

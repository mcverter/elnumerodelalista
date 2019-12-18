import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import {plainIcons} from "../images";
import GoogleMapsOpener from "./GoogleMapsOpener";
import Collapsible from 'react-collapsible';

const foo = () => (
  <Collapsible trigger="Start here">
  </Collapsible>);

const InfoWindowDetail = (place) => {
  const {
    name,
    type,
    features,
    description,
    phone1,
    phone2,
    coordinates,
    address,
    notes,
    websites,
    google_place_id,
  } = place;
  console.log( name, websites, google_place_id, type, coordinates, description, phone1,phone2, address, notes);

  const renderAddress = () => (
    <div className='iw-detail-address' >
      <div>{address}</div>
      <GoogleMapsOpener {...place}/>
    </div>
  );

  const listCategories = () => (
    <ul className='iw-detail-categories'>
      <li>{type}</li>
      {features && features.forEach(f=>(<li>{f}</li>))}
    </ul>
  )
  const renderName = () => (
    <div  className='iw-detail-name'>
      <span>
        <img  className='iw-detail-type-icon' align="left" src={plainIcons[type]} />
      </span>&nbsp;
      <span>{name}</span>
      {listCategories({type, features})}
    </div>
  );

  const renderWebsites = () => {
    if (!websites || websites.length < 1) {
      return "";
    }
    return (
        <Collapsible trigger="Sitios de Web" className='iw-detail-websites'>
        <h2> Sitios de Web</h2>
        <ul>
          {websites.map((w, idx) =>{
            return (<li key={idx}><a href={w} target={"_blank"}>{w}</a></li>)})}
        </ul>
        </Collapsible>
    )
  };

  const renderPhone = phone => (
    <div  className='iw-detail-phone'  >
      <a href={'"tel:' + phone + '"'}>
        <span><img align="left"  src={plainIcons["phone"]}/></span>
        &nbsp;{phone}
      </a>
    </div>
  );

  return (
    <div  className='iw-detail-container'>
      {name && renderName()}
      {address &&  renderAddress()}
      {phone1 &&   renderPhone(phone1)}
      {phone2 &&   renderPhone(phone2)}
      {description && <div className=".iw-detail-description"><Collapsible  trigger="Descripcion"
      >{ReactHtmlParser(description)}</Collapsible></div>}
      {websites && renderWebsites()}
      {notes && <Collapsible trigger="Notes"
      >{ReactHtmlParser(notes)}</Collapsible>}
    </div>
  );
};

InfoWindowDetail.propTypes = {
  place: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    coordinates: PropTypes.array.isRequired,
    description: PropTypes.string,
    phone1: PropTypes.string,
    phone2: PropTypes.string,
    address: PropTypes.string,
    notes: PropTypes.string,
    websites: PropTypes.array
  })
};

export default InfoWindowDetail;

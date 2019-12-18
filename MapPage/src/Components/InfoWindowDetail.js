import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import {plainIcons} from "../images";
import GoogleMapsOpener from "./GoogleMapsOpener";

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
    <div style={Styles.address}>
      <div>{address}</div>
      <GoogleMapsOpener {...place}/>
    </div>
  );

  const listDetails = () => (
    <ul>
      <li style={{fontWeight: 600, color: "maroon"}}>{type}</li>
      {features && features.forEach(f=>(<li>{f}</li>))}
    </ul>
  )
  const renderName = () => (
    <div style={Styles.name}>
      <span><img style={Styles.type} align="left" src={plainIcons[type]} /></span>&nbsp;
      <span>{name}</span>
      {listDetails({type, features})}
    </div>
  );

  const renderWebsites = () => {
    if (!websites || websites.length < 1) {
      return "";
    }
    console.log(websites)
    return (
      <div style={Styles.websites}>
        <h2> Sitios de Web</h2>
      <ul>
        {websites.map((w, idx) =>{
          return (<li key={idx}><a href={w} target={"_blank"}>{w}</a></li>)})}
      </ul>
      </div>
    )
  }
  const renderPhone = phone => (
    <div style={Styles.phone}>
      <a style={Styles.phoneLink} href={'"tel:' + phone + '"'}>
        <span><img height={"24px"} align="left"  src={plainIcons["phone"]}/></span>
        &nbsp;{phone}
      </a>
    </div>
  )
  return (
    <div style={Styles.detailsDiv}>
      {name && renderName()}
      {address &&  renderAddress()}
      {phone1 &&   renderPhone(phone1)}
      {phone2 &&   renderPhone(phone2)}
      {description && ReactHtmlParser(description)}
      {websites && renderWebsites()}
      {notes && ReactHtmlParser(notes)}
    </div>
  );
};

const Styles = {
  detailsDiv: {
    width: "96%",
    fontSize: "xx-large",
    overflow: "scroll"
  },
  name: {
    fontSize: "125%",
    fontWeight: 700,
    border: "2px black solid",
    padding: "5px",
    margin: "5px"
  },
  type: {
    height: "24px"
  },
  phone: {
    border: "2px solid green",
    padding: "5px",
    margin: "5px"
  },
  phoneLink: {
    color: "green",
    textDecoration: "none",
    fontWeight: 500,
//    fontSize: "125%",
  },
  websites: {
    border: "2px solid darkred",
    padding: "10px",
    margin: "5px",
    wordWrap: "break-word"
  },
  address: {
//    fontSize: "125%",
    fontWeight: 500,
    border: "2px blue solid",
    padding: "5px",
    margin: "5px"
  },
  notes: {}
};

InfoWindowDetail.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  coordinates: PropTypes.array,
  description: PropTypes.string,
  phone1: PropTypes.string,
  phone2: PropTypes.string,
  address: PropTypes.string,
  notes: PropTypes.string
};

export default InfoWindowDetail;
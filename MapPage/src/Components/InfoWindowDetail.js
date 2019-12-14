import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import imageMap from "../images";


const InfoWindowDetail = ({
                            name,
                            type,
                            description,
                            phone1,
                            phone2,
                            address,
                            notes
                          }) => {
  console.log( name,
    type,
    description,
    phone1,
    phone2,
    address,
    notes);
  const renderAddress = () => (
    <div style={Styles.address}>{address}</div>
  );

  const renderName = () => (
    <div style={Styles.name}>
      <span><img style={Styles.type} align="left" src={imageMap[type]} /></span>&nbsp;
      <span>{name}</span>
    </div>
  );

  const renderPhone = phone => (
    <div style={Styles.phone}>
      <a style={Styles.phoneLink} href={'"tel:' + phone + '"'}>
        <span><img height={"24px"} align="left"  src={imageMap["phone"]}/></span>
        &nbsp;+52{phone}
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
      {notes && ReactHtmlParser(notes)}
    </div>
  );
};

const Styles = {
  detailsDiv: {},
  name: {
    fontSize: "175%",
    fontWeight: 700,
    border: "2px black solid",
    padding: "5px",
    margin: "5px"
  },
  type: {
    height: "24px"
  },
  description: {},
  phone: {
    border: "2px solid green",
    padding: "5px",
    margin: "5px"
  },
  phoneLink: {
    color: "green",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "125%",
  },
  phoneImg: {
  },
  address: {
    fontSize: "125%",
    fontWeight: 500,
    border: "2px blue solid",
    padding: "5px",
    margin: "5px"
  },
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


// debugger
/*
        {phone2 &&      <div>{phone2}</div>}
        {notes  &&      <div>{notes}</div>}

 */

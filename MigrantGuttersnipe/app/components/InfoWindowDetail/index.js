import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { plainIcons } from '../../images';
import GoogleMapsOpener from '../../components/GoogleMapsOpener';
import Collapsible from 'react-collapsible';
import './styles.scss';

const InfoWindowDetail = place => {
  const {
    name,
    type,
    features,
    description,
    phones,
    coordinates,
    address,
    notes,
    websites,
    google_place_id,
    hours
  } = place;

  const renderHours = () => (
    <div className="iw-detail-hours">
      <div>{hours}</div>
    </div>
  )
  const renderAddress = () => (
    <div className="iw-detail-address">
      <div>{address}</div>
      <GoogleMapsOpener {...place} />
    </div>
  );

  const listCategories = () => {
    return (
      <ul className="iw-detail-categories">
        {features && features.map((f, idx) => <li key={idx}>{f}</li>)}
      </ul>
    );
  };

  const renderType = () => (
    <div className="iw-detail-type">
      <span>
        {' '}
        <img
          className="iw-detail-type-icon"
          align="left"
          src={plainIcons[type]}
        />
      </span>
      &nbsp;
      <span>{type}</span>
    </div>
  );
  const renderName = () => (
    <div className="iw-detail-name">
      <span>{name}</span>
      {renderType()}
      {listCategories()}
    </div>
  );

  const renderWebsites = () => {
    if (!websites || websites.length < 1) {
      return '';
    }
    return (
      <Collapsible trigger="Sitios de Web" className="iw-detail-websites">
        <ul>
          {websites.map((w, idx) => {
            return (
              <li key={idx}>
                <a href={w} target={'_blank'}>
                  {w}
                </a>
              </li>
            );
          })}
        </ul>
      </Collapsible>
    );
  };

  const renderRawHTMLInCollapsible = ({ trigger, element }) => {
    return (
      <div className="iw-detail-description">
        <Collapsible trigger={trigger}>{ReactHtmlParser(element)}</Collapsible>
      </div>
    );
  };

  const renderNotes = () =>
    renderRawHTMLInCollapsible({ trigger: 'Notes', element: notes });

  const renderDescription = () =>
    renderRawHTMLInCollapsible({
      trigger: 'Descripcion',
      element: description,
    });
  //       <a href={}>

  const renderPhones = phones => {
    return (!phones || !Array.isArray(phones)|| phones.length < 1) ? "" :(
      <div>
        {phones.map(p=>renderPhone(p))}
      </div>)
  }

  const renderPhone = phone => {
    function makePhoneCall() {
      window.open(`tel:${phone}`);
      return false;
    }

    return (
      <div className="iw-detail-phone">
        <div>
          <span>
            <img align="left" src={plainIcons['phone']} />
          </span>
          {phone}
        </div>
        <div className="phone-caller" onClick={makePhoneCall}>
          LLAMAR
        </div>
      </div>
    );
  };

  return (
    <div className="iw-detail-container">
      {name && renderName()}
      {address && renderAddress()}
      {phones && renderPhones(phones)}
      {description && renderDescription(description)}
      {websites && renderWebsites()}
      {hours && renderHours()}
      {notes && renderNotes(notes)}
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
    websites: PropTypes.array,
  }),
};

export default InfoWindowDetail;

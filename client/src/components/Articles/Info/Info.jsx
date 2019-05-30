import React from "react";
import PropTypes from 'prop-types';

import "./Info.css";
import countries from 'countries'

export default function Info(props) {
  let { time, countryCode } = props

  let country = countryCode && countries.find(obj => obj.code === countryCode)

  return (
    <div className="info">
      {/* <Emoji className="icon Emoji" symbol="🇲🇦" label="sheep" /> */}
      <span className="icon Emoji">{country.emoji}</span>
      <span className="item">
        {country.name_ar}
      </span>
      <span className="icon mbri-clock" />
      <span className="item">
        {time}
      </span>
    </div>
  );
}

Info.propTypes = {
  country: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

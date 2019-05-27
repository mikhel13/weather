import React from 'react';
// import PropTypes from 'prop-types';
import './styles.css';
const WeatherExtraInfo = ( {humidity, wind }) => (  //aquí se usa el destructuring
    <div className="weatherExtraInfoCont">
        <span className="extraInfoText">{`Humedad: ${humidity} % `}</span>
        <span className="extraInfoText">{`Vientos: ${wind}`}</span>
    </div>
);




// WeatherExtraInfo.propTypes = {
//     humidity: PropTypes.string.isRequired,
//     wind: PropTypes.string.isRequired,
// };

export default WeatherExtraInfo;


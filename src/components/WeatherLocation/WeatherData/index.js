import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTempeture from './WeatherTempeture';
import PropTypes from 'prop-types';
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY,
} from './../../../constants/weather'; // como buena practica es mejor importa una a una debido a que se usa nada más la que se va a utilizar

import './styles.css';

const WeatherData  = ({ data: { tempeture, weatherState, humidity, wind } }) => {
  return (<div className="weatherDataCont">
    <WeatherTempeture
        tempeture={tempeture}
        weatherState={weatherState}
    />
    <WeatherExtraInfo humidity={humidity} wind={wind}/>
  </div>);

};

// WeatherData.propTypes = {
//   humidity: PropTypes.number.isRequired,
//   wind: PropTypes.string.isRequired,
// };

WeatherData.propTypes = {
  data: PropTypes.shape({
    tempeture: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.string.isRequired,
    wind: PropTypes.string.isRequired,
  }),
}

export default WeatherData;

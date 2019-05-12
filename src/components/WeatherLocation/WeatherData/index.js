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

const WeatherData  = () => (
  <div className="weatherDataCont">
    <WeatherTempeture
        tempeture={20}
        weatherState={CLOUD}
    />
    <WeatherExtraInfo humidity={80} wind={"10 m/s"}/>
  </div>

);

WeatherData.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
};

export default WeatherData;

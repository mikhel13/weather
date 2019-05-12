import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY,
} from './../../../constants/weather';

const icons = {
    [CLOUD]:"cloud",
    [CLOUDY]:"day-cloudy",
    [SUN]: "day-sunny",
    [SNOW]:"snow",
    [WINDY]:"windy",
    [RAIN]:"rain"
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];

    const sizeIcon = "4x";

    if (icon)
      return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
    else
      return <WeatherIcons className="wicon" name={"day-cloudy"} size={sizeIcon} />;
}
const WeatherTempeture = ( {tempeture, weatherState }) => (
    <div className="weatherTempetureCont">
      {
        getWeatherIcon(weatherState)
      }
        <span className="tempeture">{`${tempeture}`}</span>
        <span className="tempetureType">{`C°`}</span>
    </div>
);

WeatherTempeture.propTypes = {
  tempeture: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
}

export default WeatherTempeture

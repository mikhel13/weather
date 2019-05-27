import React from 'react';
import WeatherIcons from 'react-weathericons';
// import PropTypes from 'prop-types';
import './styles.css';
import {
  CLOUD,
  SUN,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE

} from './../../../constants/weather';

const icons = {
    [CLOUD]:"cloud",
    [SUN]: "day-sunny",
    [SNOW]:"snow",
    [RAIN]:"rain",
    [THUNDER]: "day-thundestorm",
    [DRIZZLE]: "day-showers",
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

// WeatherTempeture.propTypes = {
//   tempeture: PropTypes.number.isRequired,
//   weatherState: PropTypes.string.isRequired,
// }

export default WeatherTempeture

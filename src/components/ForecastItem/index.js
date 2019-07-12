import React from 'react';
// import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData'



const ForecastItem = ({ weekDay, hour, data }) => (
  <div>
     <h2> {weekDay} - {hour} hr </h2>
     <WeatherData data={data} > </WeatherData>
  </div>
)

// ForecastItem.propTypes = {
//   weekDay: PropTypes.string.isRequired,
//   hour: PropTypes.number.isRequired,
//   data: PropTypes.shape({
//         tempeture: PropTypes.number.isRequired,
//         weatherState: PropTypes.string.isRequired,
//         humidity: PropTypes.string.isRequired,
//         wind: PropTypes.string.isRequired,
//       }),
// }
export default ForecastItem;

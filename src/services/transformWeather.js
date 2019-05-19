import convert from 'convert-units';
import {
  SUN,
  // CLOUD,
  // CLOUDY,
  // RAIN,
  // SNOW,
  // WINDY,
} from './../constants/weather';

const getTemp = kelvin => {
  return Number(convert(kelvin).from("K").to("C").toFixed(2));
}

const getWeatherState = weatherState => {
  return SUN;
}

const transformWeather = weather_data => {
  const { humidity, temp} = weather_data.main;
  const { speed } = weather_data.wind;
  const weatherState = getWeatherState(weather_data);
  const tempeture = getTemp(temp);

  const data = {
      humidity,
      tempeture,
      weatherState,
      wind: `${speed} m/s`,
  }

  return data;
}

export default transformWeather

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem'
import './styles.css';
import WeatherData from './WeatherLocation/WeatherData';
import transformForecast from './../services/transformForecast';
// const days = [
//   'lunes',
//   'martes',
//   'miércoles',
//   'jueves',
//   'viernes',
// ];

// const data = {
//   tempeture: 10,
//   humidity: 10,
//   weatherState: 'normal',
//   wind: 'normal',
// };

const api_key = "869b91cbed9e754e0e242f48342fcd0a";
const url = "https://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

  constructor() {
    super();
    this.state = { forecastData: null }
  }

  componentDidMount() {
    this.updateCity(this.props.city);

  }
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) { // este componente se usa para actualizar alguna propiedad. Se ejecuta excepto la primera vez
    if (nextProps.city !== this.props.city) {
      this.updateCity(nextProps.city);
      this.setState({ forecastData: null })
    }

  }

  // static getDerivedStateFromProps(nextProps, prevState) {

  // }


  updateCity = city => {
     // Fetch or axios
     const url_forecast = `${url}?q=${city}&appid=${api_key}`

     //Aquí se invoca al servidor por ello se genera una promise: una vez se termina de generar la promise nos permite obtener el resultado
     //con then se ejecuta lo que esté dentro de THEN()
     // se pide la data en formato json
     fetch(url_forecast).then(
       data => (data.json())
     ).then(
       weather_data => {
         console.log(weather_data);
         const forecastData = transformForecast(weather_data);
         console.log(forecastData);
         this.setState({ forecastData });
       }
     );

  }

  renderForecastItemDays(forecastData) {
    // return <h1>"Render Item"</h1>;
    return forecastData.map( forecast => (
    <ForecastItem
      key={`${forecast.weekDay}${forecast.hour}`} // react nos recomienda usa una key
      weekDay={forecast.weekDay}
      hour={forecast.hour}
      data={forecast.data}>
    </ForecastItem>));
  }

  renderProgress = () => {
    return (
      <h3>"Cargando Pronóstico extendido..."</h3>
    )

  }

  render() {
    const { city } = this.props;
    const { forecastData } = this.state;
    return (
      <div>
        <h2 className="forecast-title">Pronóstico Extendido para {city}</h2>
        {forecastData ?
          this.renderForecastItemDays(forecastData) :
          this.renderProgress()}
      </div>);
  }
}

// ForecastExtended.propTypes = {
//   city: PropTypes.string.isRequired,
// }

export default ForecastExtended

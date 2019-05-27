import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';


// se le pasa el el evento a cada uno de los componentes de que genra por medio de map
const LocationList = ({ cities,onSelectedLocation  }) => {   // cuando se tiene una única línea se  usa perénteisis () y cuando es más de una línea se una {} llaves
  // console.log(cities);
  // aquí se usa esto para disparar el evento
  const handleWeatherLocationClick = city => {
    console.log("handleWeatherLocationClick");
    onSelectedLocation(city);
  };

  //Se agregar esta constante a este scope dentro de esta funcion se hace para el burbujeo de eventos
  const srToComponents = cities => (
    // cities.map(( city, index) =>(<WeatherLocation key={index} city= {city} />))
    cities.map( city => // con el index y la key se puede renderizar un elemento expecífico o no todos los componentes. Edto es una buena practica
        (<WeatherLocation
            key={city}
            city= {city}
            onWeatherLocationClick={() => handleWeatherLocationClick(city) } />))  // -> esto hace más eficiente el componente ya que las ciudades no se repiten y se pueden cambiar el orden, y no sobre carga la página a la hora de renderizar. Es una clave natural
            // se una una función sin parametros. Luego generamos otra funcion handleWeatherLocationClick con parámetros (city) -> sineod city el parametro que es la ciudad que vienen  de la función map del array
            // cuanse se llama a la función se ejecuta = onSelectedLocation(city)
  );

  return (
    <div className="locationList">
      {srToComponents(cities)}
    </div>
  );
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func,

}

export default LocationList;

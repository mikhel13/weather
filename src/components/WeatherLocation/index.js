import React from 'react'; // importamos React esto nos va a permitir trabajar con las librerías de REact en este archivo
import Location from './Location';
import WeatherData from './WeatherData';
//se genera una constante. Esto es un componente de función
import './styles.css';
const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city={"Caracas"}></Location>
        <WeatherData></WeatherData>
    </div> //cuerpo del componente
);

export default WeatherLocation; //se invoca para que esté disponible

import React, { Component } from 'react'; // importamos React esto nos va a permitir trabajar con las librerías de REact en este archivo
import Location from './Location';
import WeatherData from './WeatherData';
//se genera una constante. Esto es un componente de función
import './styles.css';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
  } from './../../constants/weather';

const data = {
    tempeture: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}

const data2 = {
    tempeture: 15,
    weatherState: RAIN,
    humidity: 25,
    wind: '10 m/s',
}
// const WeatherLocation = () => (
//     <div className="weatherLocationCont">
//         <Location city={"Caracas"}></Location>
//         <WeatherData data={data}></WeatherData>
//     </div> //cuerpo del componente
// );

// pasar un components function a Class Component


class WeatherLocation extends Component {
    constructor () {
        super();
        this.state = { //es el estado acutal del componente. Esto va aayudar que el componente se renderice
            city: 'Buenos Aires',
            data: data,
        };
    }

    handlerUpdateClick = () => {

        console.log("actualizado")
        this.setState({ //se usa para actualizar el estado. se hace con setState ya que se encuentra dentro de una función
            city: 'Caracas',
            data: data2,
        });
    }
    render() {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick= {this.handlerUpdateClick}>Actualizar</button>
            </div> //cuerpo del componente

        );
    }

};
export default WeatherLocation; //se invoca para que esté disponible

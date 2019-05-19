import React, { Component } from 'react'; // importamos React esto nos va a permitir trabajar con las librerías de REact en este archivo
import transformWeather from './../../services/transformWeather';
import { api_weather } from './../../constants/api_url'; // se usa llaves porque no se exportó con default
import Location from './Location';
import WeatherData from './WeatherData';
//se genera una constante. Esto es un componente de función
import './styles.css';


import {
    SUN,
    // CLOUD,
    // CLOUDY,
    // RAIN,
    // SNOW,
    // WINDY,
  } from './../../constants/weather';




const data = {
    tempeture: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}

// const data2 = {
//     tempeture: 15,
//     weatherState: RAIN,
//     humidity: 25,
//     wind: '10 m/s',
// }
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
            data: null,
        };
        console.log("constructor")
    }


    componentDidMount() { // para hacer peticiones al servidor
        console.log("componentDidMount");
        this.handlerUpdateClick(); // hace la actualización automática
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }



    handlerUpdateClick = () => {
        fetch(api_weather).then( resolve => {

            return resolve.json();
        }).then( data => {

            console.log("Resultado del handlerUpdateClick")
            const newWeather = transformWeather(data); // hace la transformación de lo que llegar del servidor
            console.log(newWeather);
            // debugger;
            this.setState({  // aquí actualiza los datos
                data: newWeather
            });

        });

        // se hio para hace pruebas de funcionamiento, ahora se alimentará con la API
        // console.log("actualizado")
        // this.setState({ //se usa para actualizar el estado. se hace con setState ya que se encuentra dentro de una función

        // });
    }
    render() {
        console.log("render")
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                {data ?
                    <WeatherData data={data}></WeatherData> :
                    "Cargando..."
                }
            </div> //cuerpo del componente

        );
    }

};
export default WeatherLocation; //se invoca para que esté disponible

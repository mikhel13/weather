import React, { Component } from 'react'; // importamos React esto nos va a permitir trabajar con las librerías de REact en este archivo
import CircularProgress from '@material-ui/core/CircularProgress'
// import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import transformWeather from './../../services/transformWeather';
import { api_weather } from './../../constants/api_url'; // se usa llaves porque no se exportó con default
import Location from './Location';
import WeatherData from './WeatherData';
//se genera una constante. Esto es un componente de función
import './styles.css';


import {
    SUN,
    CLOUD,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
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



// export const api_key = "869b91cbed9e754e0e242f48342fcd0a"
// export const url_base_weather = "https://api.openweathermap.org/data/2.5/forecast"




class WeatherLocation extends Component {
    constructor (props) {
        super(props);
        const { city } = props;
        this.state = { //es el estado acutal del componente. Esto va aayudar que el componente se renderice
            city,
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
        const api_weather = getUrlWeatherByCity(this.state.city);
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
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;
        return (
            // onWeatherLocationCLick -> evento para hacer el burbujeo de eventos. Aqupi se captura/ Aquí es el ṕrimer nivel de burbujeo
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}  >
                <Location city={city}></Location>
                {data ?
                    <WeatherData data={data}></WeatherData> :
                    <CircularProgress size={50}/>
                }
            </div> //cuerpo del componente

        );
    }

};
// WeatherLocation.propTypes = {
//     city: PropTypes.string.isRequired,
//     onWeatherLocationClick: PropTypes.func,
// }
export default WeatherLocation; //se invoca para que esté disponible

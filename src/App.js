import React, { Component } from 'react';
import LocationList from './components/LocationList'
import './App.css';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const cities = [
  'Buenos Aires,ar',
  'Caracas,ven',
  'Madrid,es',
  'Bogota,col',
  'Lima,pe',
];

// se va a agregar un manejador de eventos
class App extends Component {

  handleSelectedLocation = city => (
    console.log(`handleSelectedLocation ${city}`)
  );
  render() {
    return (
      // <MuiThemeProvider theme={theme}>
        <div className="App">
        <LocationList cities={cities}
            onSelectedLocation={this.handleSelectedLocation} ></LocationList>
        </div>
      // </MuiThemeProvider>
    );
  }
}

export default App;

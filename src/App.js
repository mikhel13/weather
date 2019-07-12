import React, { Component } from 'react';
import LocationList from './components/LocationList'
import './App.css';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import ForecastExtended from './components/ForecastExtended'
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

  constructor () {
    super();
    this.state = { city: null };
  }

  handleSelectedLocation = city => {
    this.setState({ city });
    console.log(`handleSelectedLocation ${city}`)
  };
  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities}
              onSelectedLocation={this.handleSelectedLocation}>
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {
                  // !city ?
                  city &&
                    // <h1> No se seleccionó una ciudad </h1> :
                    <ForecastExtended city={city}> </ForecastExtended>
                }

              </div>
            </Paper>

          </Col>
        </Row>
      </Grid>


    );
  }
}

export default App;

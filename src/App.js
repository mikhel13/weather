import React, { Component } from 'react';
import LocationList from './components/LocationList'
import './App.css';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
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
              <div className="details"> </div>
            </Paper>

          </Col>
        </Row>
      </Grid>


    );
  }
}

export default App;

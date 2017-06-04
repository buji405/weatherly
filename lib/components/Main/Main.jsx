import React, { Component } from 'react';
import Weather from '../Weather/Weather';
import Welcome from '../Welcome/Welcome';
import WeatherData from '../../WeatherData';
import $ from 'jquery';
import key from '../../key';
import './Main.css';
import '../Input/Input.css'

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      weatherData: {},
      input: 'autoip',
      inputError: false,
      hourlyData: true,
      dailyData: false,
    };
  }
  componentDidMount() {
    const cityStored = localStorage.getItem('cityName');
    if (cityStored === null) {
      this.getApi(this.state.input);
    } else {
      this.getApi(cityStored);
      this.state.loggedIn = true;
    }
  }

  getApi(city) {
    $.get(`http://api.wunderground.com/api/${key}/conditions/hourly/forecast10day/geolookup/q/${city}.json`)
      .then(data => {
        const newWeatherObj = new WeatherData(data);
        console.log(newWeatherObj);
        this.setState({ weatherData: newWeatherObj, inputError: false });
        localStorage.setItem('cityName', city);
      })
      .catch(error => this.setState({ inputError: true })
    );
  }

  getInput(string) {

      this.setState({ input: string, loggedIn: true });
      this.getApi(string);


  }

  render() {
    if (!this.state.loggedIn) {
      return <Welcome inputHandle={this.getInput.bind(this)}
                      handle={this.getInput.bind(this)} />;
    } return <Weather inputHandle={this.getInput.bind(this)}
                      weatherData={this.state.weatherData}
                         loggedIn={this.state.loggedIn}
                       inputError={this.state.inputError}
                       hourlyData={this.state.hourlyData}
                        dailyData={this.state.dailyData}/>;
  }
}

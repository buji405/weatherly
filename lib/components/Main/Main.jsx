import React, { Component } from 'react';
import Weather from '../Weather/Weather';
import Welcome from '../Welcome/Welcome';
import WeatherData from '../../WeatherData';
import $ from 'jquery';
import key from '../../key';
import './Main.css';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      weatherData: {},
      input: 'autoip',
    };
  }
  componentDidMount() {
    this.getApi(this.state.input);
    //grab from local storage [0]
  }

  getApi(city) {

    $.get(`http://api.wunderground.com/api/${key}/conditions/hourly/forecast10day/geolookup/q/${city}.json`)
      .then(data => {
        const newWeatherObj = new WeatherData(data);
        this.setState({ weatherData: newWeatherObj }); })
      .catch(error => console.log('ERROR NOT WORKING'));
  }

  getInput(string) {
    this.setState({ input: string, loggedIn: true });
    this.getApi(string);
    // add local storage
  }

  render() {
    if (!this.state.loggedIn) {
      return <Welcome inputHandle={this.getInput.bind(this)}
                      handle={this.getInput.bind(this)} />;
    } return <Weather inputHandle={this.getInput.bind(this)}
                      weatherData={this.state.weatherData}
                      loggedIn={this.state.loggedIn} />;
  }
}

import React, { Component } from 'react';
import Weather from '../Weather/Weather';
import Welcome from '../Welcome/Welcome';
import WeatherData from '../../WeatherData';
import $ from 'jquery';
import './Main.css';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      weatherData: {},
      input: '',
    };
  }
  componentDidMount() {
    this.getApi();
  }

  getApi() {
    $.get('http://api.wunderground.com/api/5b20db7ab5eb91e9/hourly/forecast10day/geolookup/q/CO/Denver.json')
      .then(data => {
        const newWeatherObj = new WeatherData(data);
        console.log(newWeatherObj);
        this.setState({ weatherData: newWeatherObj }); })
      .catch(error => console.log('ERROR NOT WORKING'));
  }

  getInput(string) {
    this.setState({ input: string, loggedIn: true });
  }

  render() {
    if (!this.state.loggedIn) {
      return <Welcome inputHandle={this.getInput.bind(this)} handle={this.getInput.bind(this)} />;
    } return <Weather inputHandle={this.getInput.bind(this)} weatherData={this.state.weatherData} loggedIn={this.state.loggedIn} />;
  }
}

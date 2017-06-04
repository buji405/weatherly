import React, { Component } from 'react';
import Weather from '../Weather/Weather';
import Welcome from '../Welcome/Welcome';
import WeatherData from '../../WeatherData';
import $ from 'jquery';
import key from '../../key';
import './Main.css';
import '../Input/Input.css';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      weatherData: {},
      input: 'autoip',
      inputError: false,
      dailyAppear: true,
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

  changeCards(e) {
    if (e.target.className === 'switch-label switch-label-off') {
      this.setState({
        dailyAppear: true,
      });
    } else if (e.target.className === 'switch-label switch-label-on') {
      this.setState({
        dailyAppear: false,
      });
    }
  }

  getApi(city) {
    $.get(`http://api.wunderground.com/api/${key}/conditions/hourly/forecast10day/geolookup/q/${city}.json`)
      .then(data => {
        const newWeatherObj = new WeatherData(data);
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
                      dailyAppear={this.state.dailyAppear}
                      inputError={this.state.inputError}
                      changeCards={this.changeCards.bind(this)}/>;
  }
}

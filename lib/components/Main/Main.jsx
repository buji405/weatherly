import React, { Component } from 'react';
import Weather from '../Weather/Weather';
import Welcome from '../Welcome/Welcome';
import './Main.css'

export default class Main extends Component {
  constructor() {
    super();
    this.loggedIn = false;
  }
  render() {
    if (this.loggedIn) {
      return (<Welcome />);
    } else {
      return (<Weather />)
    }
  }
}

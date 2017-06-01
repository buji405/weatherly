import React, { Component } from 'react';
import Weather from '../Weather/Weather';
import Welcome from '../Welcome/Welcome';
import './Main.css'

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    }
  }

  handleSubmit() {
    alert('working!')
    this.setState({
      loggedIn: true,
    })
  }
  render() {
    if (!this.state.loggedIn) {
      return <Welcome handle={this.handleSubmit.bind(this)} />
    }  return <Weather loggedIn={this.state.loggedIn} />
  }
}

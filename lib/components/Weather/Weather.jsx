import React, { Component } from 'react';
import Input from '../Input/Input';
import Current from '../Current/Current';
import './Weather.css';


export default class Weather extends Component {
  constructor() {
    super();
    this.loggedIn = false;
  }

  render() {
    return (
      <div className='weather-container'>
        <Input />
        <Current />
        <section className='hourly-container'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </section>
      </div>
    );
  }
}

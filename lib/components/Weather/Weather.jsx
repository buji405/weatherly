import React, { Component } from 'react';
import Input from '../Input/Input';
import './Weather.css';


export default class Weather extends Component {
  constructor() {
    super();
    this.loggedIn = false;
  }

  render() {
    return (
      <div className='weather-container'>
        <div className='temp-container'>
          <h1 className='location'>Denver, CO</h1>
          <img src="lib/assets/icons/cloudy_icon.svg" />
          <h3 className='current-temp'>65<span className="current-temp-span">º</span></h3>
          <div className='high-low-container'>
            <h4>75<span>º</span></h4>
            <h4>45<span>º</span></h4>
          </div>
        </div>

      </div>

    );
  }
}
<Input/>

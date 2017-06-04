
import React, { Component } from 'react';
import iconKeys from '../../icon-keys'
import './Current.css'

export default function Current(props) {
  const icon = `./lib/assets/icons/${iconKeys[props.weatherData.icon]}.svg`;

const switchButton = props.dailyAppear ? 'switch-selection-left' : 'switch-selection-right'


  return (
    <div >
      <h1 className='logo'> WEATHERLY </h1>
      <div className='temp-container'>
        <h1 className='location'>{props.weatherData.city}</h1>

        <img className='icon' src={icon} />

        <h3 className='current-temp'>{props.weatherData.current}<span className="current-temp-span">º</span></h3>
        <div className='high-low-container'>
          <h4>{props.weatherData.high}<span>º</span></h4>
          <h4>{props.weatherData.low}<span>º</span></h4>
        </div>
        <h2 className='current-day'>{props.weatherData.time}</h2>
        <h2 className='current-blurb'>{props.weatherData.blurb}</h2>
      </div>
      <div className="switch switch-blue">
        <input type="radio" className="switch-input" value="week2" id="week2" />

        <label className="switch-label switch-label-off" onClick={(e) => props.changeCards(e)}>Hourly</label>

        <input type="radio" className="switch-input" value="month2" id="month2"/>

        <label className="switch-label switch-label-on" onClick={(e) => props.changeCards(e)}>Daily</label>

        <span className={switchButton}></span>

      </div>
    </div>
  );
}

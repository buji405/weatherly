import React, { Component } from 'react';
import './Current.css'

export default function Current(props) {
  return (
    <div >
      <h1 className='logo'> WEATHERLY </h1>
      <div className='temp-container'>
        <h1 className='location'>{props.weatherData.city}, {props.weatherData.state}</h1>
        <img src="lib/assets/icons/cloudy_icon.svg" />
        <h3 className='current-temp'>{props.weatherData.current}<span className="current-temp-span">º</span></h3>
        <div className='high-low-container'>
          <h4>{props.weatherData.high}<span>º</span></h4>
          <h4>{props.weatherData.low}<span>º</span></h4>
        </div>
        <h2 className='current-day'>{props.weatherData.time}</h2>
        <h2 className='current-blurb'>{props.weatherData.blurb}</h2>
      </div>
    </div>
  );
}

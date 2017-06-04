import React, { Component } from 'react';
import iconKeys from '../../icon-keys'
import './HourCards.css';

export default function HourCards(props) {

  const hours = props.weatherData.hourly;

  return (
  <div className='hour-card-container'>
    {
      hours.map((hour, i) => {
        return(
          <section className='hour-cards' key={Date.now() * i}>
          <div className='hour-hour-card'>{hour.FCTTIME.civil}</div>
          <img className='hour-icon-card' src={`./lib/assets/icons/${iconKeys[hour.icon]}.svg`} />
          <div className='hour-temp-card'>{hour.temp.english}<span className='hour-temp-card-symbol'>º</span></div>
          </section>
        )
      })
    }
  </div>
  );
}

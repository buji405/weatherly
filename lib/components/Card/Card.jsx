import React, { Component } from 'react';
import iconKeys from '../../icon-keys'
import './Card.css';

export default function Card(props) {

  const hours = props.weatherData.hourly;


  return (

  <div className='card-container'>
    {
      hours.map((hour) => {
        return(
          <section>
          <div className='hour-card'>{hour.FCTTIME.civil}</div>
          <img className='icon-card' src={`./lib/assets/icons/${iconKeys[hour.icon]}.svg`} />
          <div className='temp-card'>{hour.temp.english}<span>º</span></div>
          </section>
        )
      })
    }
  </div>
  );
}

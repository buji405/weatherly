import React, { Component } from 'react';
import './Card.css';

export default function Card(props) {

  const hours = props.weatherData.hourly;

  return (

  <div className='card'>
    {
      hours.map((hour) => {
        return(
          <section>
          <div className='hour'>{hour.FCTTIME.civil}</div>
          <div className='icon'>{hour.icon}</div>
          <div className='temp'>{hour.temp.english}</div>
          </section>
        )
      })
    }
  </div>
  );
}

import React, { Component } from 'react';
import iconKeys from '../../icon-keys'
import './DayCards.css';

export default function DayCards(props) {

  const days = props.weatherData.daily;
  console.log(days);
  return (
  <div className='day-card-container'>
    {
      days.map((day, i) => {
        return(
          <section className='day-cards' key={Date.now() * i}>
          <div className='day-hour-card'>
            {day.date.weekday_short}
            <div className='day-date-card'>
            {day.date.month}/{day.date.day}
            </div>
          </div>
          <img className='day-icon-card' src={`./lib/assets/icons/${iconKeys[day.icon]}.svg`} />

          <div className='day-high-low-container'>
            <div className='day-temp-card'>{day.high.fahrenheit}
              <span className='day-temp-card-symbol'>º</span>
            </div>
            <div className='day-temp-card'>{day.low.fahrenheit}
              <span className='day-temp-card-symbol'>º</span>
            </div>
          </div>
          </section>
        )
      })
    }
  </div>
  );
}

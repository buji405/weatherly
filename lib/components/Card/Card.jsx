import React, { Component } from 'react';
import iconKeys from '../../icon-keys';
import './Card.css';

export default function Card(props) {
  const hoursObj = props.weatherData.hourly;
  const dailyObj = props.weatherData.daily;
  let hourCss;
  let dailyCss;

  if (!props.dailyAppear) {
    hourCss = 'hour-container-hide';
    dailyCss = 'daily-container';
  } else {
    hourCss = 'hour-container';
    dailyCss = 'daily-container-hide';
  }

  return (

  <div className='card-container'>
    {
      hoursObj.map((hour, i) => {
        return (
          <section className={hourCss} key={Date.now() + i}>
            <section className='card-contents'>
              <div className='hour-card'>{hour.FCTTIME.civil}</div>
              <img className='icon-card'
                   src={`./lib/assets/icons/${iconKeys[hour.icon]}.svg`} />
              <div className='temp-card'>{hour.temp.english}
                <span>º</span>
              </div>
            </section>
          </section>
        );
      })
    }
    {
      dailyObj.map((day, i) => {
        return (
          <section className={dailyCss} key={Date.now() + i}>
            <section className='card-contents'>
              <div className='day-card'>{day.date.weekday_short}</div>
              <img className='icon-card'
                   src={`./lib/assets/icons/${iconKeys[day.icon]}.svg`} />
              <div className='temp-area'>
                <div className='day-high-temp'>{day.high.fahrenheit}
                  <span>º</span>
                </div>
                <div className='day-low-temp'>{day.low.fahrenheit}
                  <span>º</span>
                </div>
              </div>
            </section>
          </section>
        );
      })
    }
  </div>
  );
}

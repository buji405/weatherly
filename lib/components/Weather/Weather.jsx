import React, { Component } from 'react';
import Input from '../Input/Input';
import Current from '../Current/Current';
import HourCards from '../HourCards/HourCards';
import DayCards from '../DayCards/DayCards';
import './Weather.css';

export default function Weather(props) {
  let newHourly;
  let newDaily;

  if(props.hourlyData === true) {
    newHourly = 'hourly-container-show';
    newDaily = 'daily-container-hide'
  } else {
    newHourly = 'hourly-container-hide';
    newDaily = 'daily-container-show'
  }
  
  return (
    <div className='weather-container'>
      <Input inputHandle={props.inputHandle}
              inputError={props.inputError}
                loggedIn={props.loggedIn}/>
      <Current weatherData={props.weatherData}/>

      <section className={newHourly}>
        <HourCards weatherData={props.weatherData}/>
      </section>
      <section className={newDaily}>
        <DayCards weatherData={props.weatherData}/>
      </section>

    </div>
  );
}

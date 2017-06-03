import React, { Component } from 'react';
import Input from '../Input/Input';
import Current from '../Current/Current';
import Card from '../Card/Card';
import './Weather.css';

export default function Weather(props) {
  return (
    <div className='weather-container'>
      <Input inputHandle={props.inputHandle}
                loggedIn={props.loggedIn}
                inputError={props.inputError}/>
      <Current weatherData={props.weatherData} />
      <section className='hourly-container'>
        <Card weatherData={props.weatherData}/>
      </section>
    </div>
  );
}

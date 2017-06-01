import React, { Component } from 'react';
import Input from '../Input/Input';
import Current from '../Current/Current';
import './Weather.css';

export default function Weather(props) {
  return (
    <div className='weather-container'>
      <Input inputHandle={props.inputHandle} loggedIn={props.loggedIn}/>
      <Current weatherData={props.weatherData} />
      <section className='hourly-container'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>
    </div>
  );
}

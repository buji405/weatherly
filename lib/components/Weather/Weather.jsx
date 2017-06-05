import React, { Component } from 'react';
import Input from '../Input/Input';
import Current from '../Current/Current';
import Card from '../Card/Card';
import './Weather.css';

export default function Weather(props) {
  console.log('props', props);
  return (
    <div className='weather-container'>
      <Input inputHandle={props.inputHandle}
             inputError={props.inputError}
             loggedIn={props.loggedIn}/>
      <Current weatherData={props.weatherData}
               changeCards={props.changeCards}
               dailyAppear={props.dailyAppear}/>
      <section className='hourly-container'>
        <Card weatherData={props.weatherData}
              dailyAppear={props.dailyAppear} />
      </section>
    </div>
  );
}

import React, { Component } from 'react';
import './Current.css'


export default class Current extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div >
        <h1 className='logo'> WEATHERLY </h1>
        <div className='temp-container'>
        <h1 className='location'>Denver, CO</h1>
        <img src="lib/assets/icons/cloudy_icon.svg" />
        <h3 className='current-temp'>65<span className="current-temp-span">º</span></h3>
        <div className='high-low-container'>
          <h4>75<span>º</span></h4>
          <h4>45<span>º</span></h4>
        </div>
        <h2 className='current-day'>Sunday 1:00 pm</h2>
        <h2 className='current-blurb'>Scattered Thundershowers</h2>
        </div>
      </div>
    )
  }
}

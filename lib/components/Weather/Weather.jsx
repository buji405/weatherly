import React, { Component } from 'react';
import Input from '../Input/Input';
import Current from '../Current/Current';
import './Weather.css';


export default class Weather extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.loggedIn);
    return (
      <div className='weather-container'>
        <Input loggedIn={this.props.loggedIn}/>
        <Current />
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
}

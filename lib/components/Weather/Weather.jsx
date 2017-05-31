import React, { Component } from 'react';
import Input from '../Input/Input';
import './Weather.css'



export default class Weather extends Component {
  constructor() {
    super();
    this.loggedIn = false;
  }

  render() {
    return (
      <div>
        <Input/>
      </div>
    );
  }
}

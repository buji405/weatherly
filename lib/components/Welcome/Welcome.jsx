import React, { Component } from 'react';
import './Welcome.css';
import Input from '../Input/Input';


export default class Welcome extends Component {
  render() {
    return (
        <div className="welcome-page">
          <div className="welcome-contents">
            <h1> WEATHERLY </h1>
            <Input />
          </div>
        </div>
    );
  }
}

import React, { Component } from 'react';
import './Welcome.css';
import Input from '../Input/Input';


export default class Welcome extends Component {
  render() {
    return (
        <div style={ {position: "relative"} } className="welcome-page">
          <div className="welcome-contents">
            <h1> WEATHERLY </h1>
            <Input />
          </div>
        <img style={{position: "absolute", top: "0", zIndex: -1,  }} src="lib/assets/backgrounds/blue_gradient.png" />
        </div>
    );
  }
}

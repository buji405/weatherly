import React, { Component } from 'react';
import './Welcome.css';
import Input from '../Input/Input';


export default function Welcome(props) {
  return (
    <div className="welcome-page">
      <div className="welcome-contents">
        <h1> WEATHERLY </h1>
        <Input inputHandle={this.props.inputHandle} handle={this.props.handle}/>
      </div>
    </div>
  );
}

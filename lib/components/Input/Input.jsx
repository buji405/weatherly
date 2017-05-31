import React, { Component } from 'react';

import './Input.css';

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      location: ''
    }
  }

handleSubmit() {
  alert('working!')
}

  render() {
  let small = this.loggedIn ? 'input1' : 'input2';
  let smallBtn = this.loggedIn ? 'input1-btn' : 'input2-btn';


    return (
      <div className="input-container">
        <input className={small} type="text" placeholder="Enter city, zip or state" onChange={(e) => {
          this.setState({input: e.target.value})
        }}/>
        <button className={smallBtn} onClick={ () => this.handleSubmit() }>Submit</button>
      </div>
    )
  }
}

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
    return (
      <div className="input-container">
        <input type="text" placeholder="Enter city or zip" onChange={(e) => {
          this.setState({input: e.target.value})
        }}/>
        <button onClick={ () => this.handleSubmit() }>Submit</button>
      </div>
    )
  }
}

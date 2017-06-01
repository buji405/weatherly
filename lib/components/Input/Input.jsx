import React, { Component } from 'react';
import './Input.css';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''

    }
  }

  render() {
    console.log(this.props.handleSubmit);
  let small = !this.props.loggedIn ? 'input1' : 'input2';
  let smallBtn = !this.props.loggedIn ? 'input1-btn' : 'input2-btn';

    return (
      <div className="input-container">
        <input className={small} type="text" placeholder="Enter city, zip or state" />
      <button className={smallBtn} onClick={ this.props.handle }>Submit</button>
      </div>
    )
  }
}

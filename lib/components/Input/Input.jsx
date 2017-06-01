import React, { Component } from 'react';
import './Input.css';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      input: '',
    }
  }

changeInput(e) {
  this.setState({
  input: e.target.value,
})
}

submitInput() {
  this.props.inputHandle(this.state.input)
  this.setState({
    input: ''
  })

}
  render() {
  let small = !this.props.loggedIn ? 'input1' : 'input2';
  let smallBtn = !this.props.loggedIn ? 'input1-btn' : 'input2-btn';

    return (
      <div className="input-container">
        <input className={small} type="text" value={this.state.input} placeholder="Enter city, zip or state" onChange={this.changeInput.bind(this)}/>
        <button className={smallBtn} onClick={ this.submitInput.bind(this) }>Submit</button>
      </div>
    )
  }
}

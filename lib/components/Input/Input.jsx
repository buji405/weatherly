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
  let search = !this.props.loggedIn ? 'search1' : 'search2';
  let inputContainerLocation = !this.props.loggedIn ? 'input-container' : 'input-container2';
  let error = !this.props.inputError ? 'error-hide' : 'error-show'
    return (
      <div className={inputContainerLocation}>

        <input className={small} type="text" value={this.state.input} placeholder="Enter city, zip or state" onChange={this.changeInput.bind(this)}/>
        <button className={smallBtn} onClick={ this.submitInput.bind(this) }><img className={search} src="lib/assets/icons/black-search.svg" /></button>
        <div className='input-error-container'>
          <div className={error}>
            <p className="error-text">Please input a valid city</p>
          </div>
        </div>

      </div>
    )
  }
}

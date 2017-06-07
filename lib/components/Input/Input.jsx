import React, { Component } from 'react';
import './Input.css';
import $ from 'jquery';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      input: '',
      suggestions: [],
    };
  }

  changeInput(e) {
    this.setState({
      input: e.target.value,
    });
    this.populateSuggestions();
  }

  enterClick(e) {
    if (e.key === 'Enter') {
      this.submitInput();
    }
  }

  submitInput() {
    this.props.inputHandle(this.state.input);
    this.setState({
      input: '',
    });
  }

  populateSuggestions() {
    const searchInput = $('input').val();
    const suggestionStyleBtn = !this.props.loggedIn ?
                               'suggestion1-btn' :
                               'suggestion2-btn';

    const suggestions = this.props.autoComplete.suggest(searchInput);
    const mapSuggestions = suggestions.map((suggestion, i) =>
     <li key={Date.now() + i}className="select">
       <button className={suggestionStyleBtn}>{suggestion}</button>
     </li>).slice(0, 10);

    this.setState({ suggestions: mapSuggestions });
  }

  citySelect(e) {
    this.props.inputHandle(e.target.textContent);
    this.setState({ suggestions: '',
                    input: '' });
  }

  render() {
    const small = !this.props.loggedIn ? 'input1' : 'input2';
    const smallBtn = !this.props.loggedIn ? 'input1-btn' : 'input2-btn';
    const search = !this.props.loggedIn ? 'search1' : 'search2';
    const inputContainerLocation = !this.props.loggedIn ? 'input-container' :
                                                      'input-container2';
    const error = !this.props.inputError ? 'error-hide' : 'error-show';

    const suggestionStyle = !this.props.loggedIn ? 'suggestion1' : 'suggestion2';

    return (
      <div className={inputContainerLocation}>
        <div className='input-error-container'>
        <input className={small}
               type="text"
               value={this.state.input}
               placeholder="Enter city, zip or state"
               autoComplete={this.props.autoComplete}
               onKeyUp={this.enterClick.bind(this)}
               onChange={this.changeInput.bind(this)}/>
          <div className={error}>
            <p className="error-text">Please input a valid city, zip or state</p>
          </div>
        </div>
        <button className={smallBtn} onClick={ this.submitInput.bind(this) }>
          <img className={search} src="lib/assets/icons/black-search.svg" />
        </button>
        <div className={suggestionStyle}
             onClick={this.citySelect.bind(this)}>{this.state.suggestions}
        </div>
      </div>
    );
  }
}

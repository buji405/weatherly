import React from 'react';
import Main from '../lib/components/Main/Main';
import Welcome from '../lib/components/Welcome/Welcome';
import Weather from '../lib/components/Weather/Weather';
import Current from '../lib/components/Current/Current';
import { shallow, mount } from 'enzyme';
import testData from './test-data.json';
import iconKeys from '../lib/icon-keys';
import WeatherData from '../lib/WeatherData';
import Trie from '../lib/Trie';

describe('main tdd', () => {
  window.localStorage = {
    getItem() {},
  };

  it('should change loggedIn state on click', () => {
    const component = mount(<Main />);

    const parsedData = WeatherData(testData);

    component.setState({ weatherData: parsedData });
    component.setState({ loggedIn: false });

    const button = component.find('button');

    expect(component.state('loggedIn')).toEqual(false);

    button.simulate('click');

    expect(component.state('loggedIn')).toEqual(true);
  });

  it.skip('should mount components', () => {
    const component = shallow(<Main />);

    console.log(component.state('trie'));

    component.instance().componentDidMount();

    console.log(component.state('trie'));
  });

  it('should change the state of daily appear on click', () => {
    const component = mount(<Main />);
    const parsedData = WeatherData(testData);
    component.setState({ weatherData: parsedData, inputError: false });

    expect(component.state('dailyAppear')).toEqual(true);

    const switchToggle = component.find('.switch-label-on');

    switchToggle.simulate('click');

    expect(component.state('dailyAppear')).toEqual(false);
  });

  it.skip('should change the state of input on click in main', () => {
    const component = mount(<Main />);
    const parsedData = WeatherData(testData);
    component.setState({ weatherData: parsedData, inputError: false });

    expect(component.state('input')).toEqual('autoip');

    const input = component.find('input[type="text"]');
    const inputVal = 'Denver, Co';
    const changeEvent = { target: { value: inputVal } };

    const button = component.find('button');

    input.simulate('change', changeEvent);

    button.simulate('click');

    expect(component.state('input')).toEqual('Denver, Co');
  });
});

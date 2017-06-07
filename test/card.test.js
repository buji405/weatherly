import React from 'react';
import Card from '../lib/components/Card/Card';
import { shallow, mount } from 'enzyme';
import iconKeys from '../lib/icon-keys';
import WeatherData from '../lib/WeatherData';
import testData from './test-data.json';

describe('Hour card tdd', () => {
  it('hour-card should exist', () => {
    const parsedData = WeatherData(testData);

    const component = shallow(<Card weatherData={parsedData} />);

    expect(component.find('.hour-card').exists()).toBe(true);
  });

  it('it should render 7 hours', () => {
    const parsedData = WeatherData(testData);

    const component = shallow(<Card weatherData={parsedData} />);

    const hourFind = component.find('.hour-card');
    expect(hourFind.length).toEqual(7);
  });

  it('Hour card should have the correct time', () => {
    const parsedData = WeatherData(testData);

    const component = shallow(<Card weatherData={parsedData} />);

    expect(component.find('.hour-card').first().text()).toEqual('4:00 PM');
  });

  it('Hour temp should have the correct temp', () => {
    const parsedData = WeatherData(testData);

    const component = shallow(<Card weatherData={parsedData} />);

    expect(component.find('.temp-card').first().text()).toEqual('87º');
  });
});

describe('Day Card tdd', () => {
  it('day-card should exist', () => {
    const parsedData = WeatherData(testData);

    const component = shallow(<Card weatherData={parsedData} />);

    expect(component.find('.day-card').exists()).toBe(true);
  });

  it('it should render 10 days', () => {
    const parsedData = WeatherData(testData);

    const component = shallow(<Card weatherData={parsedData} />);

    const dayFind = component.find('.day-card');
    expect(dayFind.length).toEqual(10);
  });

  it('Day card should have the correct time', () => {
    const parsedData = WeatherData(testData);

    const component = shallow(<Card weatherData={parsedData} />);

    expect(component.find('.day-card').first().text()).toEqual('Mon');
  });

  it('Day card should have the correct high temp', () => {
    const parsedData = WeatherData(testData);

    const component = shallow(<Card weatherData={parsedData} />);

    expect(component.find('.day-high-temp').first().text()).toEqual('90º');
  });

  it('Day card should have the correct low temp', () => {
    const parsedData = WeatherData(testData);

    const component = shallow(<Card weatherData={parsedData} />);

    expect(component.find('.day-low-temp').first().text()).toEqual('71º');
  });
});

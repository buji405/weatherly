import React from 'react';
import Current from '../lib/components/Current/Current';
import { shallow, mount } from 'enzyme';
import testData from './test-data.json';
import WeatherData from '../lib/WeatherData';
import iconKeys from '../lib/icon-keys';

describe('current tdd', () => {
  it('should render', () => {
    const parsedData = WeatherData(testData);
    const icon = `./lib/assets/icons/${iconKeys[parsedData.icon]}.svg`;

    var component = shallow(<Current weatherData={parsedData} />);

    var location = component.find('.location');
    expect(component.contains('Austin, TX')).toEqual(true);
    expect(location.text()).toEqual('Austin, TX');

    var iconFind = component.find('.icon');
    expect(iconFind.prop('src')).toEqual(icon);

    var currentTemp = component.find('.current-temp');
    expect(currentTemp.text()).toEqual('87º');

    var high = component.find('.high-temp');
    expect(high.text()).toEqual('90º');

    var low = component.find('.low-temp');
    expect(low.text()).toEqual('71º');

    var currentDay = component.find('.current-day');
    expect(currentDay.text()).toEqual('Last Updated on June 5, 3:23 PM CDT');

    var currentBlurb = component.find('.current-blurb');
    expect(currentBlurb.text()).toEqual('Thunderstorms early. Lows overnight in the low 70s.');
  });

  it('it should execute passed in function when clicked', () => {
    const parsedData = WeatherData(testData);
    const icon = `./lib/assets/icons/${iconKeys[parsedData.icon]}.svg`;

    const mockFn = jest.fn();
    const component = shallow(<Current weatherData={parsedData} changeCards={mockFn} />);

    var button = component.find('.switch-label-off');
    button.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);

    const mockFn2 = jest.fn();
    const component2 = shallow(<Current weatherData={parsedData} changeCards={mockFn2} />);

    var button2 = component2.find('.switch-label-on');
    button2.simulate('click');
    expect(mockFn2).toHaveBeenCalledTimes(1);
  });
});

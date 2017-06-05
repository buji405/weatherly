import React from 'react';
import Main from '../lib/components/Main/Main';
import Welcome from '../lib/components/Welcome/Welcome';
import { shallow, mount } from 'enzyme';
import testData from './test-data.json'

describe('main tdd', () => {
  window.localStorage = {
    getItem() {}
  }

  it('should render', () => {
    var component = mount(<Main />);
    //
    // var input = component.find('input[type="text"]');
    // var inputVal = 'Denver, CO';
    // var changeEvent = { target: { value: inputVal } };
    //
    // input.simulate('change', changeEvent);
    //
    // expect(input.props('value')).toEqual(inputVal);



  });
});

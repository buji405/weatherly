import React from 'react'
import Input from '../lib/components/Input/Input'
import { shallow, mount } from 'enzyme'

describe('weather tdd', () => {
  it('it should execute passed in function when clicked', () => {
    const mockFn = jest.fn();
    const component = shallow(<Input inputHandle={mockFn} />)

    var button = component.find('button');
    console.log(button);
    button.simulate('click');

    expect(mockFn).toHaveBeenCalledTimes(1);
  })
})

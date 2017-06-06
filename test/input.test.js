import React from 'react'
import Input from '../lib/components/Input/Input'
import { shallow, mount } from 'enzyme'

describe('weather tdd', () => {
  it('it should execute passed in function when clicked', () => {
    const mockFn = jest.fn();
    const component = shallow(<Input inputHandle={mockFn} />)
    var button = component.find('button');

    button.simulate('click');

    expect(mockFn).toHaveBeenCalledTimes(1);
  })

  it('should update state on the input with the value in input', () => {
    const component = mount(<Input />)
    var input = component.find('input[type="text"]');
    var inputVal = 'Denver, Co';
    var changeEvent = { target: { value: inputVal } };

    input.simulate('change', changeEvent);

    expect(input.prop('value')).toEqual(inputVal);
    expect(component.state('input')).toEqual(inputVal);

  })

  it.skip ('should clear the input field on click', () => {
    // const component = mount(<Input />)
    // var input = component.find('input[type="text"]');
    // var inputVal = 'Denver, Co';
    // var changeEvent = { target: { value: inputVal } };
    //
    // input.simulate('change', changeEvent);
    // var button = component.find('.input1-btn');
    // console.log(button);
    // button.simulate('click');
    //
    // expect(input.prop('value')).toEqual('')

    // expect(component.state('input')).toEqual('');
  })

  

})

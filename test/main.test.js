import React from 'react';
import Main from '../lib/components/Main/Main';
import Welcome from '../lib/components/Welcome/Welcome';
import { shallow, mount } from 'enzyme';

describe('main tdd', () => {
  it('should change state on button click', () => {

    var component = shallow(<Welcome handleSubmit={() => { }} />);

    console.log(component.debug);
  });
});

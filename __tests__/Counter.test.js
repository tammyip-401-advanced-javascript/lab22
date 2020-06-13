import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from '../src/components/Counter.js';

describe('My component', () => {
  it('correctly changes the state variable *count* on button click', () => {
    let component = mount(<MyComponent />);
    let btn = component.find('button#my-btn');

    btn.simulate('click');
    expect(component.state('count')).toBe(1);
  });
});
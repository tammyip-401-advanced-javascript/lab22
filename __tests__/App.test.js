import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App.js';


describe('snapshot test for app', () => {
  it('creates matching snapshot', () => {
    const currentpage = renderer.create(<App />).toJSON();
    expect(currentpage).toMatchSnapshot();
  });
});

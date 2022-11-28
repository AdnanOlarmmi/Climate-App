import React from 'react';
import render from './App.test';
import HomePage from '../components/countriesComponents/HomePage';

describe('MyRocketss', () => {
  it('render My Rockets Components', () => {
    render(<HomePage />);
    expect(HomePage).toMatchSnapshot();
  });
});

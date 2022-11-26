import React from 'react';
import render from './App.test';
import DetailsPage from '../components/countriesComponents/HomePage';

describe('MyRocketss', () => {
    it('render My Rockets Components', () => {
      render(<DetailsPage />);
      expect(DetailsPage).toMatchSnapshot();
    });
  });
  
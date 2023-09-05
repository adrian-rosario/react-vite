import { render, screen } from '@testing-library/react';
import HomePage from '../pages/home/HomePage';
import React from 'react';

describe('App', () => {
  it('renders headline', () => {
    render(<HomePage />);
    const headline = screen.getByText("Vite + React");
    expect(headline).toBeInTheDocument();
  });
});

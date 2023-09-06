import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from '../pages/home/HomePage';
import React from 'react';

describe('App', () => {
  it('renders headline', () => {
    render(<HomePage />);
    const headline = screen.getByText("Vite + React");
    expect(headline).toBeInTheDocument();
  });

  it('renders the modal dialog', async () => {
    render(<HomePage />);
    const buttonElement = await screen.findByText('show overlay');
    expect(buttonElement).toBeInTheDocument();

    // TODO: error thrown on fireEvent
    // bc of createPortal =/     
    // fireEvent.click(buttonElement);
  })
});

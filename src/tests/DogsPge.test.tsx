import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import DogsPage from "../pages/dogs/DogsPage";
import React from "react";
import { vi } from "vitest";

describe('DogsPage()', () => {
  it('renders list items if request succeeds', async () => {
    window.fetch = vi.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => (
        {
          message: {
            affenpinscher: [],
            african: [],
            airedale: [],
            akita: [],
            appenzeller: [],
            australian: [ 'shepherd' ],
          }
        }
      )
    })

    render(<DogsPage />)

    const listElements = await screen.findAllByRole('listitem', {}, {});

    expect(listElements).not.toHaveLength(0);
  })

  it('renders default image until a button is clicked', async () => {
    window.fetch = vi.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => (
        {
          message: {
            affenpinscher: [],
            african: [],
            airedale: [],
            akita: [],
            appenzeller: [],
            australian: [ 'shepherd' ],
          }
        }
      )
    })

    render(<DogsPage />)

    const defaultImage = document.getElementsByClassName('defaultImage');

    expect(defaultImage).toHaveLength(1);

  })

  it('renderes a new image when button is clicked', async () => {
    window.fetch = vi.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => (
        {
          message: {
            affenpinscher: [],
            african: [],
            airedale: [],
            akita: [],
            appenzeller: [],
            australian: [ 'shepherd' ],
          }
        }
      )
    })

    render(<DogsPage />)

    const buttonElement = await screen.findByText('african', {exact: false});

    window.fetch = vi.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => (
        {
          message: "https://images.dog.ceo/breeds/african/n02116738_3365.jpg"
        }
      )
    })

    fireEvent.click(buttonElement);
    const poochImage = await waitFor( () => screen.getByAltText('pooch image') as HTMLImageElement);
    expect(poochImage.src).toBe('https://images.dog.ceo/breeds/african/n02116738_3365.jpg');
  })
});


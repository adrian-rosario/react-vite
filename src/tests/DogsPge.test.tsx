import { render, screen } from "@testing-library/react";
import DogsPage from "../pages/dogs/DogsPage";
import React from "react";
import { vi } from "vitest";
import userEvent from '@testing-library/user-event'

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

  it('renderes a new image when button is clicked', () => {
    // TODO:
    // add in fetch mock for the random breed image
    // userEvent button click setup, test new image path 
  })
});


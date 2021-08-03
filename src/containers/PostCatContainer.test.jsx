import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PostCatContainer from './PostCatContainer';

describe('PostCat Container', () => {
  it('renders PostCat', async () => {
    render(<MemoryRouter><PostCatContainer /></MemoryRouter>);

    // test getting URL user types in
    const userURL = await screen.findByPlaceholderText('URL');
    fireEvent.change(userURL,
      { 
        target:
        {
          value: 'https://rickandmortyapi.com/api/character'
        }
      });
    expect(userURL.value).toBe('https://rickandmortyapi.com/api/character');

    // test getting radio button value

    // test user entering request body text

    // test user clicking submit button

    // test history displaying on sidebar

  });
});


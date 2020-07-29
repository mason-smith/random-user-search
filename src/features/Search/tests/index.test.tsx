import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { SearchPage } from '..';

describe('App', () => {
  test('Renders App component', () => {
    render(
      <Provider store={store}>
        <SearchPage />
      </Provider>
    );
    expect(screen.getByPlaceholderText('Search for user')).toBeInTheDocument();
    expect(2).toBe(2);
  });
});

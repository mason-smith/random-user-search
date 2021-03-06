import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Local Dependencies
import Button from 'components/Button';

// @ts-ignore
let container: HTMLElement = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  // @ts-ignore
  container = null;
});

describe('Button component', () => {
  test('renders with or without a name', () => {
    act(() => {
      render(
        <Button
          onClick={() => {
            return;
          }}
        >
          Button Text
        </Button>,
        container
      );
    });
    expect(container.textContent).toBe('Button Text');
  });

  test('handles user click', () => {
    const onClick = jest.fn();
    act(() => {
      render(<Button onClick={() => onClick()}>Button Text</Button>, container);
    });

    userEvent.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('handles disabled state', () => {
    const onClick = jest.fn();
    act(() => {
      render(
        <Button disabled onClick={() => onClick()}>
          Button Text
        </Button>,
        container
      );
    });

    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('handles enabled state', () => {
    const onClick = jest.fn();
    act(() => {
      render(
        <Button disabled={false} onClick={() => onClick()}>
          Button Text
        </Button>,
        container
      );
    });

    expect(screen.getByRole('button')).toBeEnabled();
  });
});

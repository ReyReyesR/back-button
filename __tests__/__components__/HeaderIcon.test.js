import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import HeaderIcon from '../../components/header/HeaderIcon';
import { ThemeProvider } from '../../providers/ThemeProvider';
import themes from '../../config/themes/themes.js';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('HeaderIcon renders login', () => {
  const { getByRole } = render(
    <ThemeProvider value={themes.wowcher}>
      <HeaderIcon icon="login" isMobleHidden={true} />
    </ThemeProvider>
  );

  expect(getByRole('button')).toHaveAttribute('aria-label', 'Login');
});

it('HeaderIcon renders location', () => {
  const { getByRole } = render(
    <ThemeProvider value={themes.wowcher}>
      <HeaderIcon icon="location" isMobleHidden={true} />
    </ThemeProvider>
  );

  expect(getByRole('button')).toHaveAttribute('aria-label', 'Change location');
});

it('HeaderIcon renders subscribe', () => {
  const { getByRole } = render(
    <ThemeProvider value={themes.wowcher}>
      <HeaderIcon icon="subscribe" isMobleHidden={true} />
    </ThemeProvider>
  );

  expect(getByRole('button')).toHaveAttribute(
    'aria-label',
    'Subscribe to our Newsletter'
  );
});

it('HeaderIcon renders logged in', () => {
  const { getByRole } = render(
    <ThemeProvider value={themes.wowcher}>
      <HeaderIcon icon="login" isMobleHidden={true} isLoggedIn={true} />
    </ThemeProvider>
  );

  expect(getByRole('button')).toHaveAttribute('aria-label', 'Menu');
});

it('HeaderIcon renders basket with badge', () => {
  const { getByRole, getByText } = render(
    <ThemeProvider value={themes.wowcher}>
      <HeaderIcon icon="basket" badgeContent="3" />
    </ThemeProvider>
  );

  expect(getByRole('button')).toHaveAttribute('aria-label', '3 Item in Basket');
  // the badge
  expect(getByText('3')).toBeTruthy();
});

it('HeaderIcon renders basket with no badge', () => {
  const { getByRole, queryByText } = render(
    <ThemeProvider value={themes.wowcher}>
      <HeaderIcon icon="basket" badgeContent="not a number" />
    </ThemeProvider>
  );

  expect(getByRole('button')).toHaveAttribute('aria-label', 'Basket');
  // no badge
  expect(queryByText('not a number')).toBeFalsy();
});

it('HeaderIcon clickMethod fires', () => {
  const mockFunction = jest.fn();
  const { getByRole, queryByText } = render(
    <ThemeProvider value={themes.wowcher}>
      <HeaderIcon icon="login" clickMethod={mockFunction} />
    </ThemeProvider>
  );

  fireEvent.click(getByRole('button'));
  expect(mockFunction).toHaveBeenCalledTimes(1);
});

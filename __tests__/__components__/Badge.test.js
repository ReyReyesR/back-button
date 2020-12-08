import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Badge from '../../components/Badge';
import { ThemeProvider } from '../../providers/ThemeProvider';
import themes from '../../config/themes/themes.js';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('Badge renders content, visible to all', () => {
  const { getByText, queryByLabelText, getByLabelText } = render(
    <ThemeProvider value={themes.wowcher}>
      <Badge badgeContent="hello" badgeColor={'pink'} />
    </ThemeProvider>
  );

  expect(getByText('hello')).toBeTruthy();
  expect(getByText('hello')).toHaveAttribute('aria-hidden', 'false');
});

it('Badge renders content, hidden to screen reader', () => {
  const { getByText, queryByLabelText, getByLabelText } = render(
    <ThemeProvider value={themes.wowcher}>
      <Badge badgeContent="hello" isAriaHidden={true} badgeColor={'pink'} />
    </ThemeProvider>
  );

  expect(getByText('hello')).toBeTruthy();
  expect(getByText('hello')).toHaveAttribute('aria-hidden', 'true');
});

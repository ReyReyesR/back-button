import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Icon from '../../components/Icon';
import { ThemeProvider } from '../../providers/ThemeProvider';
import themes from '../../config/themes/themes.js';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('Icon renders content with img role', () => {
  const { getByRole } = render(
    <ThemeProvider value={themes.wowcher}>
      <Icon faIcon={faMapMarkerAlt} />
    </ThemeProvider>
  );

  // the icon will have role=img and be aria-hidden=true
  expect(getByRole('img', { hidden: true })).toBeTruthy();
});

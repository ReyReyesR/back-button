/* HeaderIcon: a responsive icon with hover tooltip */
import React from 'react';
import HeaderIcon from '../components/header/HeaderIcon';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from '../providers/ThemeProvider';
import WowStoryRender, { BrandsPlus } from '../components/WowStoryRender';
import '../scss/custom.scss';

export default {
  title: 'HeaderIcon',
  component: HeaderIcon,
  decorators: [withKnobs],
};

// Knobs as dynamic variables.
export const Options = () => {
  const theme = select(...BrandsPlus);

  const iconsLabel = 'Icons';
  const iconsOptions = ['location', 'subscribe', 'login', 'basket'];
  const iconsDefaultValue = 'location';
  const iconName = select(iconsLabel, iconsOptions, iconsDefaultValue);

  const isLoggedIn = boolean('isLoggedIn', true);
  const isMobleHidden = boolean('isMobleHidden', false);
  const badgeContent = text('badgeContent', '2');

  return (
    <ThemeProvider value={theme}>
      <WowStoryRender isPadded={true}>
        <HeaderIcon
          icon={iconName}
          isLoggedIn={isLoggedIn}
          isMobleHidden={isMobleHidden}
          badgeContent={badgeContent}
          clickMethod={action('clicked')}
        />
      </WowStoryRender>
    </ThemeProvider>
  );
};

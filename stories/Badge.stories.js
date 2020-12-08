import React from 'react';
import Badge from '../components/Badge';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '../providers/ThemeProvider';
import WowStoryRender, { BrandsPlus } from '../components/WowStoryRender';
import '../scss/custom.scss';

export default {
  title: 'Badge',
  component: Badge,
  decorators: [withKnobs],
};

// Knobs as dynamic variables.
export const Options = () => {
  const theme = select(...BrandsPlus);
  const badgeContent = text('badgeContent', '2');

  return (
    <ThemeProvider value={theme}>
      <WowStoryRender isPadded={true}>
        <Badge
          badgeContent={badgeContent}
          badgeColor={theme.colors.basketcount}
        />
      </WowStoryRender>
    </ThemeProvider>
  );
};

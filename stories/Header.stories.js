import React from 'react';
import Header from '../components/header/Header';
import { ThemeProvider } from '../providers/ThemeProvider';
import WowStoryRender, { BrandsPlus } from '../components/WowStoryRender';
import { select, withKnobs } from '@storybook/addon-knobs';
import '../scss/custom.scss';

export default {
  title: 'Header',
  component: Header,
  decorators: [withKnobs],
};

// Knobs as dynamic variables.
export const Options = () => {
  const theme = select(...BrandsPlus);

  return (
    <ThemeProvider value={theme}>
      <WowStoryRender>
        <Header></Header>
      </WowStoryRender>
    </ThemeProvider>
  );
};

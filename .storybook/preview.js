import { addDecorator } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withPerformance);
addDecorator(withA11y);

import React from 'react';
import { render } from '@testing-library/react';
import PageStatic from '../../pages/page/[...slug]';

describe('App', () => {
  it('renders without crashing', () => {
    const { container } = render(<PageStatic />);
    const todoList = container.querySelector('.static__content');
    const appContainer = container.querySelector('.app__container');
    expect(appContainer).not.toBe(null);
    expect(todoList).not.toBe(null);
  });
});

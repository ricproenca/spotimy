import { cleanup, render } from '@testing-library/react';
import React from 'react';

import App from './App';

describe('App', () => {
  afterEach(cleanup);

  it('should render without crashing', () => {
    // Arrange

    // Act
    const { asFragment } = render(<App />);

    //Assets
    expect(asFragment()).toMatchSnapshot();
  });
});

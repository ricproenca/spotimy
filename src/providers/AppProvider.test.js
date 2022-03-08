import { render } from '@testing-library/react';
import React from 'react';

// import AppProvider from './AppProvider';

jest.mock('./Theme', () => () => ({}));

describe.skip('AppProvider', () => {
  describe('Testing rendering', () => {
    test('It matches snapshot', () => {
      // Arrange
      const props = {
        children: <div></div>
      };

      // Act
      const { asFragment } = render(<AppProvider {...props} />);

      // Assert
      expect(asFragment()).toMatchSnapshot();
    });
  });
});

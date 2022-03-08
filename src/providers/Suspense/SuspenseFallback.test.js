import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

import SuspenseFallback from './SuspenseFallback';

describe('SuspenseFallback', () => {
  describe('Testing rendering', () => {
    test('It matches snapshot', () => {
      // Act
      const { asFragment } = render(<SuspenseFallback />);

      // Assert
      expect(asFragment()).toMatchSnapshot();
    });

    test('It renders', () => {
      // Act
      render(<SuspenseFallback />);
      const progressBar = screen.getByTestId('suspense-progress');

      // Assert
      expect(progressBar).toBeInTheDocument();
    });
  });
});

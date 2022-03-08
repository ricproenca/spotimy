import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import ErrorBoundaryFallback from './ErrorBoundaryFallback';

jest.mock('./ErrorBoundaryFallback.styles', () => () => ({ root: 'root', color: 'color' }));

const mockResetError = jest.fn();
const mockResetErrorCalls = mockResetError.mock.calls;

describe('ErrorBoundaryFallback', () => {
  describe('Testing rendering', () => {
    test('It matches snapshot', () => {
      // Act
      const { asFragment } = render(<ErrorBoundaryFallback />);
      // Assert
      expect(asFragment()).toMatchSnapshot();
    });

    test('It renders', () => {
      // Arrange
      const props = {
        error: { message: 'This is an error message' },
        resetError: mockResetError
      };

      // Act
      render(<ErrorBoundaryFallback {...props} />);

      const title = screen.getByTestId('title');
      const errorMessage = screen.getByTestId('error-message');
      const tryAgainButton = screen.getByTestId('try-again-button');

      // Assert
      expect(title).toBeInTheDocument();
      expect(errorMessage).toBeInTheDocument();
      expect(tryAgainButton).toBeInTheDocument();
    });
  });

  describe('Testing event handlers', () => {
    test('Call reset error', () => {
      // Arrange
      const props = {
        error: { message: 'This is an error message' },
        resetError: mockResetError
      };

      // Act
      render(<ErrorBoundaryFallback {...props} />);
      const tryAgainButton = screen.getByTestId('try-again-button');

      // Act
      fireEvent.click(tryAgainButton);

      // Assert
      expect(mockResetErrorCalls).toHaveLength(1);
    });
  });
});

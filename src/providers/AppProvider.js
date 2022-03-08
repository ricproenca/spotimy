/* eslint-disable no-unused-vars */
import { ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import ErrorBoundaryFallback from './ErrorBoundary';
import SuspenseFallback from './Suspense';
import theme from './Theme';

/**
 * Wrapper for all App providers.
 * @param {*} children - consumer components
 */
const AppProvider = ({ children }) => {
  // Render
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallback} onReset={() => undefined}>
        <Suspense fallback={<SuspenseFallback />}>
          <BrowserRouter>{children}</BrowserRouter>
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.element
};

export default AppProvider;

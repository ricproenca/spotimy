/* eslint-disable no-unused-vars */
import CssBaseline from '@mui/material/CssBaseline';
import PropTypes from 'prop-types';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import CustomThemeProvider from '@Providers/Theme';

import ErrorBoundaryFallback from './ErrorBoundary';
import SuspenseFallback from './Suspense';

/**
 * Wrapper for all App providers.
 * @param {*} children - consumer components
 */
const AppProvider = ({ children }) => {
  // Render
  return (
    <CustomThemeProvider>
      <>
        <CssBaseline />
        <ErrorBoundary FallbackComponent={ErrorBoundaryFallback} onReset={() => undefined}>
          <Suspense fallback={<SuspenseFallback />}>
            <BrowserRouter>{children}</BrowserRouter>
          </Suspense>
        </ErrorBoundary>
      </>
    </CustomThemeProvider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.element
};

export default AppProvider;

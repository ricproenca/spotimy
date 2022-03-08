import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import React from 'react';

import { reloadPage } from '@Utils/router';

import ErrorBoundaryFallbackStyles from './ErrorBoundaryFallback.styles';

/**
 * Fallback UI for the Error boundary
 *
 * @param {object|string} error - error to show
 * @param {Function} resetError - callback to reset the Error
 */
const ErrorBoundaryFallback = ({ error, resetError }) => {
  // eslint-disable-next-line no-console
  console.log('ErrorBoundaryFallback -> error', error.message);

  const classes = ErrorBoundaryFallbackStyles();

  const showError = error.message ? error.message : error;

  return (
    <Box component='div' className={classes.root}>
      <h2 data-testid='title'>Ooops, something went wrong</h2>

      <pre className={classes.code} data-testid='error-message'>
        {showError}
      </pre>

      <button className={classes.button} onClick={resetError} data-testid='try-again-button'>
        Try again
      </button>

      <pre className={classes.stack}>{error.stack}</pre>
    </Box>
  );
};

ErrorBoundaryFallback.propTypes = {
  /**
   * Error to show
   */
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  /**
   * callback to reset the Error
   */
  resetError: PropTypes.func
};

ErrorBoundaryFallback.defaultProps = {
  error: '',
  resetError: reloadPage
};

export default ErrorBoundaryFallback;

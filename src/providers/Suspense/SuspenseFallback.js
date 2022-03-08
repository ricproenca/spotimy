import LinearProgress from '@mui/material/LinearProgress';
import React from 'react';

/**
 * Help with handling async operations by waiting for some code to load
 * and show a progress bar while waiting.
 */
const SuspenseFallback = () => <LinearProgress color='primary' data-testid='suspense-progress' />;

export default SuspenseFallback;

import React from 'react';
import { Navigate } from 'react-router-dom';

import { DASHBOARD_ROUTE, SPOTIFY_REDIRECT_ROUTE } from '@Config/routes';

const DashboardPage = React.lazy(() => import('@Pages/Dashboard'));
const RedirectPage = React.lazy(() => import('@Pages/Redirect'));

/**
 * Definition of the routes that require authentication
 */
const protectedRoutes = [
  { name: 'Home', path: '/', element: <Navigate to={DASHBOARD_ROUTE} /> },
  { name: 'Dashboard', path: DASHBOARD_ROUTE, element: <DashboardPage /> },
  { name: 'Redirect', path: SPOTIFY_REDIRECT_ROUTE, element: <RedirectPage /> }
];

export { protectedRoutes };

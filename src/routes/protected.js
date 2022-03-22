import React from 'react';

import { DASHBOARD_ROUTE, HOME_ROUTE, SPOTIFY_REDIRECT_ROUTE } from '@Config/routes';

const DashboardPage = React.lazy(() => import('@Pages/Dashboard'));
const HomePage = React.lazy(() => import('@Pages/Home'));
const RedirectPage = React.lazy(() => import('@Pages/Redirect'));
/**
 * Definition of the routes that require authentication
 */
const protectedRoutes = [
  { name: 'Home', path: HOME_ROUTE, element: <HomePage /> },
  { name: 'Dashboard', path: DASHBOARD_ROUTE, element: <DashboardPage /> },
  { name: 'Redirect', path: SPOTIFY_REDIRECT_ROUTE, element: <RedirectPage /> }
];

export { protectedRoutes };

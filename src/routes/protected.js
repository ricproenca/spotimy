import React from 'react';

import { DASHBOARD_ROUTE, HOME_ROUTE } from '@Config/routes';

const DashboardPage = React.lazy(() => import('@Pages/Dashboard'));
const HomePage = React.lazy(() => import('@Pages/Home'));

/**
 * Definition of the routes that require authentication
 */
const protectedRoutes = [
  { name: 'Home', path: HOME_ROUTE, element: <HomePage /> },
  { name: 'Dashboard', path: DASHBOARD_ROUTE, element: <DashboardPage /> }
];

export { protectedRoutes };

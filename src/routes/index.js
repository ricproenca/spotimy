import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { HOME_ROUTE } from '@Config/routes';
import { getCurrentUser } from '@Utils/auth';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

/**
 * Definition of the Application Routes
 */
const AppRoutes = () => {
  const validUserSession = JSON.parse(getCurrentUser());

  const commonRoutes = [
    {
      path: '*',
      element: <Navigate to={HOME_ROUTE} />
    }
  ];

  const validRoutes = validUserSession ? protectedRoutes : publicRoutes;
  const routes = [...validRoutes, ...commonRoutes];

  return useRoutes(routes);
};

export default AppRoutes;

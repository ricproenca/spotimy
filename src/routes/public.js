import React from 'react';
import { Navigate } from 'react-router-dom';

import { SPOTIFY_REDIRECT_ROUTE, USER_LOGIN_ROUTE, USER_REGISTER_ROUTE } from '@Config/routes';

const Redirect = React.lazy(() => import('@Pages/Redirect'));
const RegisterPage = React.lazy(() => import('@Pages/Register'));
const LoginPage = React.lazy(() => import('@Pages/Login'));

/**
 * Definition of the routes that not require authentication
 */
const publicRoutes = [
  {
    name: 'Home',
    path: '/',
    element: <Navigate to={USER_LOGIN_ROUTE} />
  },
  {
    name: 'Login',
    path: USER_LOGIN_ROUTE,
    element: <LoginPage />
  },
  {
    name: 'Register',
    path: USER_REGISTER_ROUTE,
    element: <RegisterPage />
  },
  {
    name: 'Redirect',
    path: SPOTIFY_REDIRECT_ROUTE,
    element: <Redirect />
  }
];

export { publicRoutes };

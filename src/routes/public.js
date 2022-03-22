import React from 'react';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
import { SPOTIFY_REDIRECT_ROUTE, USER_LOGIN_ROUTE, USER_REGISTER_ROUTE } from '@Config/routes';

// const RedirectPage = React.lazy(() => import('@Pages/Redirect'));
const RegisterPage = React.lazy(() => import('@Pages/Register'));
const LoginPage = React.lazy(() => import('@Pages/Login'));

/**
 * Definition of the routes that not require authentication
 */
const publicRoutes = [
  { name: 'Home', path: '/', element: <Navigate to={USER_LOGIN_ROUTE} /> },
  { name: 'Login', path: USER_LOGIN_ROUTE, element: <LoginPage /> },
  { name: 'Register', path: USER_REGISTER_ROUTE, element: <RegisterPage /> }
  // { name: 'Redirect', path: SPOTIFY_REDIRECT_ROUTE, element: <RedirectPage /> }
];

export { publicRoutes };

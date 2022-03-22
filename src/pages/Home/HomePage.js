import React from 'react';

import { SPOTIFY_LOGIN_ROUTE } from '@Config/spotify';

import useHomePageStyles from './HomePage.styles';

/**
 * Home Page
 *
 * It checks if the user has a valid session and redirect to the proper route
 * - dashboard: in case of a valid session
 * - login: in case of a non valid session
 */
const HomePage = () => {
  const classes = useHomePageStyles();

  return (
    <div className={classes.login}>
      <a href={SPOTIFY_LOGIN_ROUTE}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default HomePage;
